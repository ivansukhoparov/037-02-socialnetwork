import s from "./Profile.module.css";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.contentHeader}>
                <img src="/profile.png" alt="profile"/>
            </div>
            <div>
                ava + description
            </div>
            <div className="">
                <h2>My posts</h2>
                <div> New post</div>
                <ul>
                    <li>My post 1</li>
                    <li>My post 2</li>
                </ul>

            </div>

        </div>
    );
}
