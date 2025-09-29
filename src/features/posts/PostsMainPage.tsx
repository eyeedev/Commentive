import { PostsList } from './PostsList'
import { AddPostForm } from './AddPostForm'

export function PostsMainPage() {
  return (
    <div className="posts-main-container">
      <PostsList />
      <AddPostForm />
    </div>
  )
}