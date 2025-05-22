
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-6 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              Copyright © {year} MiniBlog. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link to="/posts" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link to="/tags" className="text-sm text-muted-foreground hover:text-foreground">
              Tags
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
