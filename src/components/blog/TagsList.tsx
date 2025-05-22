
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TagsListProps {
  tags: Array<{
    name: string;
    count: number;
  }>;
  className?: string;
}

const TagsList = ({ tags, className }: TagsListProps) => {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {tags.map((tag) => (
        <Link to={`/tags/${tag.name}`} key={tag.name}>
          <Badge variant="outline" className="text-sm py-1.5 hover:bg-secondary">
            {tag.name}
            <span className="ml-1.5 text-xs text-muted-foreground">({tag.count})</span>
          </Badge>
        </Link>
      ))}
    </div>
  );
};

export default TagsList;
