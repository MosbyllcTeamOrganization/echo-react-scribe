
import { Post } from "@/types/blog";

export const posts: Post[] = [
  {
    title: "Building a Blog with Next.js and Shadcn UI",
    slug: "building-a-blog-with-nextjs-and-shadcn-ui",
    date: "2023-05-10",
    author: "John Doe",
    excerpt: "Learn how to create a beautiful, fast blog using Next.js and Shadcn UI components.",
    content: `
      <p>Next.js has become one of the most popular React frameworks for building web applications. Combined with Shadcn UI, you can create beautiful, accessible interfaces with ease.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js provides an excellent developer experience with features like:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>Built-in routing</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>First, you'll need to create a Next.js project:</p>
      
      <pre><code>npx create-next-app my-blog</code></pre>
      
      <p>Then, you can install Shadcn UI:</p>
      
      <pre><code>npx shadcn-ui@latest init</code></pre>
      
      <h2>Building Components</h2>
      <p>With Shadcn UI, you can easily add components to your project. Let's add a button:</p>
      
      <pre><code>npx shadcn-ui@latest add button</code></pre>
      
      <p>Then use it in your components:</p>
      
      <pre><code>import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <Button>Click me</Button>
  )
}</code></pre>

      <h2>Conclusion</h2>
      <p>By combining Next.js and Shadcn UI, you can build beautiful, performant blogs with minimal effort.</p>
    `,
    tags: ["next.js", "react", "ui"],
    readingTime: 5,
    featured: true
  },
  {
    title: "Introduction to Tailwind CSS",
    slug: "introduction-to-tailwind-css",
    date: "2023-04-22",
    author: "Jane Smith",
    excerpt: "Discover how Tailwind CSS can transform your workflow and make styling easier than ever.",
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach styling in web applications. Instead of writing custom CSS, Tailwind provides utility classes that can be applied directly in your HTML.</p>
      
      <h2>Key Benefits</h2>
      <p>Tailwind offers several advantages:</p>
      <ul>
        <li>No more naming CSS classes</li>
        <li>Consistent design system</li>
        <li>Highly customizable</li>
        <li>Smaller file sizes in production</li>
      </ul>
      
      <h2>Basic Usage</h2>
      <p>Using Tailwind is straightforward. Here's an example of a button:</p>
      
      <pre><code>&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
  Click me
&lt;/button&gt;</code></pre>
      
      <h2>Responsive Design</h2>
      <p>Tailwind makes responsive design simple with breakpoint prefixes:</p>
      
      <pre><code>&lt;div class="text-center sm:text-left md:text-right"&gt;
  This text aligns differently on different screen sizes
&lt;/div&gt;</code></pre>
      
      <h2>Getting Started</h2>
      <p>Install Tailwind with npm:</p>
      
      <pre><code>npm install -D tailwindcss
npx tailwindcss init</code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS can significantly speed up your development process while maintaining a consistent look and feel across your application.</p>
    `,
    tags: ["css", "tailwind", "design"],
    readingTime: 4,
    featured: true
  },
  {
    title: "Using React Query for Data Fetching",
    slug: "using-react-query-for-data-fetching",
    date: "2023-03-15",
    author: "John Doe",
    excerpt: "Simplify your data fetching logic with React Query and improve user experience.",
    content: `
      <p>React Query is a library that simplifies data fetching, caching, and state management in React applications. It provides a declarative API for fetching, caching, and updating data.</p>
      
      <h2>Key Features</h2>
      <p>React Query offers several powerful features:</p>
      <ul>
        <li>Automatic caching</li>
        <li>Background data refetching</li>
        <li>Pagination and infinite scrolling support</li>
        <li>Mutation API</li>
        <li>Prefetching capabilities</li>
      </ul>
      
      <h2>Basic Query</h2>
      <p>Here's a simple example of using React Query:</p>
      
      <pre><code>import { useQuery } from 'react-query'

function Posts() {
  const { isLoading, error, data } = useQuery('posts', fetchPosts)
  
  if (isLoading) return 'Loading...'
  if (error) return 'An error occurred: ' + error.message
  
  return (
    &lt;div&gt;
      {data.map(post => (
        &lt;p key={post.id}&gt;{post.title}&lt;/p&gt;
      ))}
    &lt;/div&gt;
  )
}</code></pre>
      
      <h2>Mutations</h2>
      <p>React Query also makes data mutations easy:</p>
      
      <pre><code>import { useMutation, useQueryClient } from 'react-query'

function AddPost() {
  const queryClient = useQueryClient()
  const mutation = useMutation(newPost => {
    return axios.post('/posts', newPost)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
    }
  })
  
  return (
    &lt;button onClick={() => {
      mutation.mutate({ title: 'New Post' })
    }}&gt;
      Add Post
    &lt;/button&gt;
  )
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>React Query can significantly simplify your data fetching logic and improve user experience with its smart caching and background updates.</p>
    `,
    tags: ["react", "data fetching", "hooks"],
    readingTime: 6,
    featured: true
  },
  {
    title: "State Management with Zustand",
    slug: "state-management-with-zustand",
    date: "2023-02-20",
    author: "Jane Smith",
    excerpt: "Learn how Zustand provides a simple yet powerful state management solution for React applications.",
    content: `
      <p>Zustand is a small, fast, and scalable state management solution for React. Unlike Redux, it has a minimal API that's easy to learn and use.</p>
      
      <h2>Why Zustand?</h2>
      <p>Zustand offers several advantages:</p>
      <ul>
        <li>Simple and unopinionated</li>
        <li>Doesn't require providers</li>
        <li>Supports TypeScript out of the box</li>
        <li>Can be used with or without React</li>
      </ul>
      
      <h2>Creating a Store</h2>
      <p>Here's how you create a basic store with Zustand:</p>
      
      <pre><code>import create from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))</code></pre>
      
      <h2>Using the Store</h2>
      <p>You can use the store in any component:</p>
      
      <pre><code>function BearCounter() {
  const bears = useStore(state => state.bears)
  return &lt;h1&gt;{bears} around here...&lt;/h1&gt;
}

function Controls() {
  const { increasePopulation, removeAllBears } = useStore(state => state)
  
  return (
    &lt;div&gt;
      &lt;button onClick={increasePopulation}&gt;one up&lt;/button&gt;
      &lt;button onClick={removeAllBears}&gt;remove all&lt;/button&gt;
    &lt;/div&gt;
  )
}</code></pre>
      
      <h2>Async Actions</h2>
      <p>Handling async actions is straightforward:</p>
      
      <pre><code>const useStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json()
    set({ products })
  }
}))</code></pre>
      
      <h2>Conclusion</h2>
      <p>Zustand provides a refreshingly simple approach to state management that's easy to learn and efficient to use.</p>
    `,
    tags: ["react", "state management", "zustand"],
    readingTime: 5
  },
  {
    title: "CSS Grid: A Complete Guide",
    slug: "css-grid-a-complete-guide",
    date: "2023-01-18",
    author: "John Doe",
    excerpt: "Master CSS Grid layout with this comprehensive guide covering all major features and techniques.",
    content: `
      <p>CSS Grid is a powerful layout system that allows you to create complex web layouts with ease. It's a two-dimensional system that handles both columns and rows.</p>
      
      <h2>Basic Grid</h2>
      <p>To create a basic grid, you need to define a container with display: grid and set up columns and rows:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}</code></pre>
      
      <h2>Grid Areas</h2>
      <p>You can name areas of your grid and place items accordingly:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>
      
      <h2>Grid Alignment</h2>
      <p>CSS Grid provides powerful alignment capabilities:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
}</code></pre>
      
      <h2>Responsive Grids</h2>
      <p>You can create responsive grids with minmax() and auto-fill:</p>
      
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>CSS Grid is a game-changer for web layout, offering capabilities that were previously only possible with complex workarounds. Learning Grid is essential for modern front-end development.</p>
    `,
    tags: ["css", "layout", "web design"],
    readingTime: 8
  },
  {
    title: "JavaScript Promises and Async/Await",
    slug: "javascript-promises-and-async-await",
    date: "2022-12-05",
    author: "Jane Smith",
    excerpt: "Understand the fundamentals of asynchronous JavaScript with Promises and async/await syntax.",
    content: `
      <p>Asynchronous programming is essential in JavaScript, especially for operations like fetching data or reading files. Promises and async/await are modern ways to handle asynchronous code.</p>
      
      <h2>Promises</h2>
      <p>A Promise is an object representing the eventual completion or failure of an asynchronous operation:</p>
      
      <pre><code>const fetchData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));</code></pre>
      
      <h2>Chaining Promises</h2>
      <p>Promises can be chained to avoid callback hell:</p>
      
      <pre><code>fetchUser(userId)
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .then(comments => console.log(comments))
  .catch(error => console.error(error));</code></pre>
      
      <h2>Async/Await</h2>
      <p>Async/await provides a more synchronous-looking syntax for working with promises:</p>
      
      <pre><code>const fetchUserData = async (userId) => {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    return comments;
  } catch (error) {
    console.error(error);
  }
};

fetchUserData(1).then(comments => console.log(comments));</code></pre>
      
      <h2>Parallel Execution</h2>
      <p>Run multiple promises in parallel with Promise.all:</p>
      
      <pre><code>const fetchAllData = async () => {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error(error);
  }
};</code></pre>
      
      <h2>Conclusion</h2>
      <p>Understanding Promises and async/await is crucial for writing clean, maintainable asynchronous JavaScript code.</p>
    `,
    tags: ["javascript", "async", "promises"],
    readingTime: 7
  }
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getAllPosts = () => {
  return [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getFeaturedPosts = () => {
  return posts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostsByTag = (tag: string) => {
  return posts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getAllTags = () => {
  const tags: Record<string, number> = {};
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (tags[tag]) {
        tags[tag]++;
      } else {
        tags[tag] = 1;
      }
    });
  });
  
  return Object.entries(tags)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};
