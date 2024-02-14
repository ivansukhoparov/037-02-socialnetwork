import s from "./NewPosts.module.css";
import {Post} from "@/app/components/Profile/Posts/PostsList/Post/Post";

export const NewPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove post</button>
        </div>
);
}
