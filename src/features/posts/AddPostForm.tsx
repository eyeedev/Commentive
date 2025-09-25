import { useAppDispatch } from "@/app/hooks";
import { Post, postAdded } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLInputElement
}
interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
}

export function AddPostForm() {
  const dispatch = useAppDispatch();
  function handleSubmit(e: React.FormEvent<AddPostFormElements>) {
    e.preventDefault();

    const {elements} = e.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;

    const newPost: Post ={
      id: nanoid(),
      title,
      content,
    }

    dispatch(postAdded(newPost))
    e.currentTarget.reset();

  }

  return (
    <section>
      <h2>Ad a new Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue="" required />
        <label htmlFor="postContent">Post Content:</label>
        <textarea id="postContent" name="postContent" defaultValue="" required />
        <button>Save Post</button>
      </form>
    </section>
  )
}
