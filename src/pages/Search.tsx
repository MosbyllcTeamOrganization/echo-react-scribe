
import React, { useState, useEffect } from 'react';
import PostCard from '@/components/blog/PostCard';
import { Input } from '@/components/ui/input';
import { getAllPosts } from '@/data/posts';
import { Post } from '@/types/blog';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const allPosts = getAllPosts();
  
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const results = allPosts.filter(post => {
      return (
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    });
    
    setSearchResults(results);
  }, [searchTerm, allPosts]);
  
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Search</h1>
        
        <div className="relative max-w-lg">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search posts by title, content, or tag..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      
      {searchTerm.trim() !== '' && (
        <div className="mt-6">
          <p className="text-muted-foreground mb-6">
            {searchResults.length === 0
              ? 'No posts found.'
              : `Found ${searchResults.length} post${searchResults.length !== 1 ? 's' : ''}.`}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {searchResults.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
