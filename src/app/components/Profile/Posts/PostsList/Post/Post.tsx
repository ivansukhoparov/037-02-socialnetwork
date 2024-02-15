import s from "./Post.module.css";

export const Post = (props: any) => {
    return (
            <div className={s.item}>
                <img src="/avator.png"/>
                <span>{props.message}</span>
                <span> {props.likesCount} likes</span>
            </div>
);
}
