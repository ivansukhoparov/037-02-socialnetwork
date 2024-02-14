import s from "./Profile.module.css";
import {PostsList} from "@/app/components/Profile/Posts/PostsList/PostsList";
import {Posts} from "@/app/components/Profile/Posts/Posts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.contentHeader}>
                <img src="/profile.png" alt="profile"/>
            </div>
            <div>
                ava + description
            </div>
            <Posts />
        </div>
    );
}
