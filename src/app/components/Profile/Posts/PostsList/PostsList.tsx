import s from "./PostsList.module.css";
import {Post} from "@/app/components/Profile/Posts/PostsList/Post/Post";
import {NewPosts} from "@/app/components/Profile/Posts/NewPost/NewPosts";

export const PostsList = () => {
    return (
            <div className={s.posts}>
                <Post message="Hi, how are you" likesCount="50"/>
                <Post message="It's my first post" likesCount="15"/>

            </div>
    );
}
