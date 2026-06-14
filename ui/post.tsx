import type { BlogPost } from "@/lib/posts";

interface PostProps {
  post: BlogPost;
}

export function Post({ post }: PostProps) {
  return (
    <li className="mb-4">
      <article>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-sm text-gray-600">{post.date}</p>
        <p>{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
          Read more →
        </a>
      </article>
    </li>
  );
}
