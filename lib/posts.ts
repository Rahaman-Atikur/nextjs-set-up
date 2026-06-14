export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
}

export async function getPosts(): Promise<BlogPost[]> {
  // TODO: Replace with your actual data source (database, CMS, etc.)
  return [
    {
      id: "1",
      title: "First Blog Post",
      slug: "first-blog-post",
      excerpt: "This is the first blog post",
      content: "Full content of the first blog post",
      date: "2024-01-01",
    },
    {
      id: "2",
      title: "Second Blog Post",
      slug: "second-blog-post",
      excerpt: "This is the second blog post",
      content: "Full content of the second blog post",
      date: "2024-01-02",
    },
  ];
}
