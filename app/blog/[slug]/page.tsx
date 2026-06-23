import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/posts'
 
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
 
  if (!post) {
    notFound() // calling the 404 page
  }
 
  return <div>{post.title}</div>
}