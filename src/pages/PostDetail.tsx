
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostContent from '@/components/blog/PostContent';
import { Button } from '@/components/ui/button';
import { getPostBySlug } from '@/data/posts';
import { ArrowLeft } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || '');
  
  useEffect(() => {
    if (!post) {
      navigate('/posts', { replace: true });
    }
  }, [post, navigate]);
  
  if (!post) return null;
  
  return (
    <div className="animate-fade-in">
      <Button 
        variant="ghost" 
        className="mb-8 flex items-center"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <PostContent post={post} />
    </div>
  );
};

export default PostDetail;
