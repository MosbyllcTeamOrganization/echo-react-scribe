
import React from 'react';
import { getAllTags } from '@/data/posts';
import TagsList from '@/components/blog/TagsList';

const Tags = () => {
  const tags = getAllTags();
  
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Tags</h1>
        <p className="text-lg text-muted-foreground">
          Browse posts by topic
        </p>
      </header>
      
      <TagsList tags={tags} className="gap-4" />
    </div>
  );
};

export default Tags;
