
import React from 'react';
import PostCard from './PostCard';
import { Post } from '@/types/blog';

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Posts</h2>
        <p className="text-muted-foreground">Discover my latest writing</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
