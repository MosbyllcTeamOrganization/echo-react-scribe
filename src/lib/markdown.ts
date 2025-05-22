
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import { Post, Tag } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, '')
    };
  });
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse markdown with frontmatter
    const { data, content } = matter(fileContents);
    
    // Convert markdown to HTML
    const htmlContent = md.render(content);
    
    const post: Post = {
      title: data.title,
      slug: data.slug || slug,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      content: htmlContent,
      tags: data.tags,
      readingTime: data.readingTime,
      featured: data.featured || false
    };

    return post;
  } catch (error) {
    console.error(`Error loading post with slug: ${slug}`, error);
    return undefined;
  }
}

export function getAllPosts(): Post[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const post = getPostBySlug(slug);
        return post;
      })
      .filter((post): post is Post => post !== undefined)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return allPosts;
  } catch (error) {
    console.error('Error loading all posts', error);
    return [];
  }
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured);
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.tags.includes(tag));
}

export function getAllTags(): Tag[] {
  const allPosts = getAllPosts();
  const tagsWithCount: Record<string, number> = {};
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => {
      if (tagsWithCount[tag]) {
        tagsWithCount[tag]++;
      } else {
        tagsWithCount[tag] = 1;
      }
    });
  });
  
  return Object.entries(tagsWithCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
