import s from "./PostsList.module.css";
import {Post} from "@/app/components/Profile/Posts/PostsList/Post/Post";
import {NewPosts} from "@/app/components/Profile/Posts/NewPost/NewPosts";

export const PostsList = () => {
    return (
            <div className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
    );
}
