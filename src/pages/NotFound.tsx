
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Oops! Page not found.</p>
      <Button asChild>
        <Link to="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
