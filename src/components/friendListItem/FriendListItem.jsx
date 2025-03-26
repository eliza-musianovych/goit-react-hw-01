import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({avatar, name, isOnline}) {
return <div className={css.container}>
    <img className={css.img} src={avatar} alt="Avatar" width="48" />
    <p className={css.name}>{name}</p>
    <p className={clsx({ [css.online]: isOnline, [css.offline]: !isOnline })}>
        {isOnline ? `Online` : `Offline`}
    </p>
</div>
}