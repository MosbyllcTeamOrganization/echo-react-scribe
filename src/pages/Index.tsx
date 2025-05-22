
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import { getFeaturedPosts } from '@/data/posts';

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  
  return (
    <div className="animate-fade-in">
      <section className="py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Welcome to MiniBlog
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          A minimalist blog template built with Next.js and Shadcn UI. 
          Perfect for writers and developers who appreciate clean design 
          and efficient performance.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link to="/posts">View All Posts</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">About Me</Link>
          </Button>
        </div>
      </section>
      
      <FeaturedPosts posts={featuredPosts} />
    </div>
  );
};

export default Index;
