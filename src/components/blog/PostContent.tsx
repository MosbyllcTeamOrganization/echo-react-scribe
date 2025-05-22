
import React from 'react';
import { Post } from '@/types/blog';
import { Badge } from '@/components/ui/badge';

interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readingTime} min read</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </header>
      
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default PostContent;
