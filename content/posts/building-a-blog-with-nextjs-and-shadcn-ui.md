
---
title: "Building a Blog with Next.js and Shadcn UI"
slug: "building-a-blog-with-nextjs-and-shadcn-ui"
date: "2023-05-10"
author: "John Doe"
excerpt: "Learn how to create a beautiful, fast blog using Next.js and Shadcn UI components."
tags: ["next.js", "react", "ui"]
readingTime: 5
featured: true
---

Next.js has become one of the most popular React frameworks for building web applications. Combined with Shadcn UI, you can create beautiful, accessible interfaces with ease.

## Why Next.js?

Next.js provides an excellent developer experience with features like:
- Server-side rendering
- Static site generation
- API routes
- Built-in routing

## Getting Started

First, you'll need to create a Next.js project:

```
npx create-next-app my-blog
```

Then, you can install Shadcn UI:

```
npx shadcn-ui@latest init
```

## Building Components

With Shadcn UI, you can easily add components to your project. Let's add a button:

```
npx shadcn-ui@latest add button
```

Then use it in your components:

```javascript
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Button>Click me</Button>
  )
}
```

## Conclusion

By combining Next.js and Shadcn UI, you can build beautiful, performant blogs with minimal effort.
