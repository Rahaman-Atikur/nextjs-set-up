
import { getPosts } from '@/lib/posts'
import {post} from '@/ui/post'
export default async function Page(){
    const post = await getPosts();
    return (
         <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
    )

} 
