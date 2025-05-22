
---
title: "Using React Query for Data Fetching"
slug: "using-react-query-for-data-fetching"
date: "2023-03-15"
author: "John Doe"
excerpt: "Simplify your data fetching logic with React Query and improve user experience."
tags: ["react", "data fetching", "hooks"]
readingTime: 6
featured: true
---

React Query is a library that simplifies data fetching, caching, and state management in React applications. It provides a declarative API for fetching, caching, and updating data.

## Key Features

React Query offers several powerful features:
- Automatic caching
- Background data refetching
- Pagination and infinite scrolling support
- Mutation API
- Prefetching capabilities

## Basic Query

Here's a simple example of using React Query:

```javascript
import { useQuery } from 'react-query'

function Posts() {
  const { isLoading, error, data } = useQuery('posts', fetchPosts)
  
  if (isLoading) return 'Loading...'
  if (error) return 'An error occurred: ' + error.message
  
  return (
    <div>
      {data.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}
```

## Mutations

React Query also makes data mutations easy:

```javascript
import { useMutation, useQueryClient } from 'react-query'

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
    <button onClick={() => {
      mutation.mutate({ title: 'New Post' })
    }}>
      Add Post
    </button>
  )
}
```

## Conclusion

React Query can significantly simplify your data fetching logic and improve user experience with its smart caching and background updates.
