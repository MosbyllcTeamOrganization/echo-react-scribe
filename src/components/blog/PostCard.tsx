
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/types/blog';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <Link to={`/posts/${post.slug}`}>
        <CardHeader className="p-4 pb-2">
          <h2 className="text-xl font-bold line-clamp-2">{post.title}</h2>
          <p className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </CardHeader>
        
        <CardContent className="p-4 pt-2">
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        
        <CardFooter className="p-4 pt-2 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="hover:bg-secondary/80">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default PostCard;
