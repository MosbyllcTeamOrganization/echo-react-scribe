
import React from 'react';
import PostCard from '@/components/blog/PostCard';
import { getAllPosts } from '@/data/posts';

const Posts = () => {
  const posts = getAllPosts();
  
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">All Posts</h1>
        <p className="text-lg text-muted-foreground">
          Browse all my blog posts sorted by date
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
