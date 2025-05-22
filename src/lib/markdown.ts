
import { Post, Tag } from '@/types/blog';

// Mock data - in a real application, this would be generated or fetched from an API
const POSTS: Post[] = [
  {
    title: "Building a Blog with Next.js and Shadcn UI",
    slug: "building-a-blog-with-nextjs-and-shadcn-ui",
    date: "2023-06-20",
    author: "John Doe",
    excerpt: "Learn how to build a modern blog application using Next.js and Shadcn UI components.",
    content: "<p>This is a sample blog post about building a blog with Next.js and Shadcn UI.</p><p>In this tutorial, we'll explore how to create a dynamic blog using these modern technologies.</p>",
    tags: ["nextjs", "react", "ui"],
    readingTime: 8,
    featured: true
  },
  {
    title: "CSS Grid: A Complete Guide",
    slug: "css-grid-a-complete-guide",
    date: "2023-05-15",
    author: "Jane Smith",
    excerpt: "Master CSS Grid layout with this comprehensive guide covering all essential concepts.",
    content: "<p>CSS Grid is a powerful layout system that allows for complex arrangements of content in two dimensions.</p><p>In this guide, we'll cover everything from basic concepts to advanced techniques.</p>",
    tags: ["css", "web-development", "frontend"],
    readingTime: 12,
    featured: true
  },
  {
    title: "Introduction to Tailwind CSS",
    slug: "introduction-to-tailwind-css",
    date: "2023-04-10",
    author: "Mike Johnson",
    excerpt: "Get started with Tailwind CSS and learn how it can revolutionize your styling workflow.",
    content: "<p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs.</p><p>This introduction will help you understand the core concepts and get started quickly.</p>",
    tags: ["css", "tailwind", "frontend"],
    readingTime: 6,
    featured: false
  },
  {
    title: "JavaScript Promises and Async/Await",
    slug: "javascript-promises-and-async-await",
    date: "2023-03-22",
    author: "Sarah Lee",
    excerpt: "Understand how promises work in JavaScript and how to use async/await for cleaner code.",
    content: "<p>JavaScript Promises provide a clean way to handle asynchronous operations.</p><p>Async/await syntax builds on promises to make asynchronous code even more readable and maintainable.</p>",
    tags: ["javascript", "async", "web-development"],
    readingTime: 9,
    featured: false
  },
  {
    title: "State Management with Zustand",
    slug: "state-management-with-zustand",
    date: "2023-02-05",
    author: "Alex Chen",
    excerpt: "Explore Zustand, a minimalistic state management solution for React applications.",
    content: "<p>Zustand is a small, fast, and scalable state management solution for React applications.</p><p>This post explores how to implement common state management patterns with Zustand.</p>",
    tags: ["react", "state-management", "zustand"],
    readingTime: 7,
    featured: true
  },
  {
    title: "Using React Query for Data Fetching",
    slug: "using-react-query-for-data-fetching",
    date: "2023-01-10",
    author: "Emma Wilson",
    excerpt: "Learn how React Query simplifies data fetching, caching, and state management in React.",
    content: "<p>React Query is a library that makes fetching, caching, and updating server state in React applications much easier.</p><p>This tutorial covers key concepts and practical examples to get you started.</p>",
    tags: ["react", "data-fetching", "react-query"],
    readingTime: 10,
    featured: false
  }
];

export function getAllPosts(): Post[] {
  return POSTS.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedPosts(): Post[] {
  return POSTS.filter(post => post.featured);
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find(post => post.slug === slug);
}

export function getPostsByTag(tag: string): Post[] {
  return POSTS.filter(post => post.tags.includes(tag));
}

export function getAllTags(): Tag[] {
  const tagsWithCount: Record<string, number> = {};
  
  POSTS.forEach(post => {
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
