
export interface Post {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
}

export interface Tag {
  name: string;
  count: number;
}
