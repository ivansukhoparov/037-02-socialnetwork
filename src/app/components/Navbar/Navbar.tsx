import s from "./Navbar.module.css";

export const Navbar = () => {
    return ( <div className={s.nav}>
            <ul>
                <li className={s.item}> Profiles</li>
                <li className={s.item}> Messages</li>
                <li className={s.item}> News</li>
                <li className={s.item}> Music</li>
                <li className={s.item}> Settings</li>
            </ul>
        </div>
    );
}
