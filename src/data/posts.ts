
// 将功能重定向到 lib/markdown.ts
import { 
  getAllPosts,
  getFeaturedPosts, 
  getPostBySlug, 
  getPostsByTag, 
  getAllTags 
} from '@/lib/markdown';

// 导出所有需要的函数
export { 
  getAllPosts, 
  getFeaturedPosts, 
  getPostBySlug, 
  getPostsByTag, 
  getAllTags 
};
