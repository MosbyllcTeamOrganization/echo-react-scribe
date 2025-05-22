
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PostCard from '@/components/blog/PostCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPostsByTag } from '@/data/posts';
import { ArrowLeft } from 'lucide-react';

const TagDetail = () => {
  const { tag } = useParams();
  const posts = getPostsByTag(tag || '');
  
  return (
    <div className="animate-fade-in">
      <Button 
        variant="ghost" 
        className="mb-8 flex items-center"
        asChild
      >
        <Link to="/tags">
          <ArrowLeft className="mr-2 h-4 w-4" />
          All Tags
        </Link>
      </Button>
      
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
          <Badge className="mr-3 py-1.5" variant="outline">{tag}</Badge> 
          Posts
        </h1>
        <p className="text-lg text-muted-foreground">
          {posts.length} post{posts.length !== 1 ? 's' : ''} tagged with "{tag}"
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

export default TagDetail;
