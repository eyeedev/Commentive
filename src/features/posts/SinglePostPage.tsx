import { useAppSelector } from "@/app/hooks";
import { Link, useParams } from "react-router-dom"

export function SinglePostPage(){
    const {postId} = useParams();

    const post = useAppSelector(state => state.posts.find(post => post.id === postId));

    if(!post){
        return(
            <section>
                <h2>Post Not Found!</h2>
            </section>
        ) 
    }
    return(
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <Link to={`/editPost/${post.id}`} className="button">
                     Edit Post
                </Link>
            </article>
        </section>
    )
}