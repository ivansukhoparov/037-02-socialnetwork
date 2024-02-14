import s from "./Post.module.css";

export const Post = () => {
    return (
            <div className={s.item}>
                <img src="/avator.png"/>
                My post 1
                <span> likes</span>
            </div>
);
}
