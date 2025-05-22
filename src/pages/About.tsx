
import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
      </header>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Welcome to my blog! I'm a web developer passionate about modern frontend technologies 
          and creating beautiful user experiences.
        </p>
        
        <p>
          This blog is built with Next.js and Shadcn UI, inspired by the minimalist design 
          philosophy of the Astro-Paper theme. I write about web development, design patterns, 
          and occasionally share tutorials on topics I'm learning.
        </p>
        
        <h2>My Tech Stack</h2>
        <p>
          I specialize in frontend development with a focus on these technologies:
        </p>
        
        <ul>
          <li>React & Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
        
        <h2>Blog Features</h2>
        <p>
          This blog includes several notable features:
        </p>
        
        <ul>
          <li>Responsive design that works on mobile and desktop</li>
          <li>Dark mode support</li>
          <li>Tag-based categorization</li>
          <li>Fast performance</li>
          <li>Clean, minimalist UI</li>
        </ul>
        
        <h2>Contact</h2>
        <p>
          Feel free to reach out if you have questions or just want to connect!
        </p>
      </div>
    </div>
  );
};

export default About;
