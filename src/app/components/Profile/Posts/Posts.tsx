import {NewPosts} from "@/app/components/Profile/Posts/NewPost/NewPosts";
import {PostsList} from "@/app/components/Profile/Posts/PostsList/PostsList";

export const Posts = () => {
    return (
        <div>
            <h2>My posts</h2>
            <NewPosts />
            <PostsList />
        </div>
    );
}
