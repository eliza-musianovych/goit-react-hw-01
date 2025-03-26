import FriendListItem from "../friendListItem/FriendListItem";
import css from "./FriendsList.module.css";

export default function FriendList({friends}) {
     return <ul className={css.list}>
    {friends.map((friend) => {
        return <li className={css[`list-item`]} key={friend.id}>
		<FriendListItem 
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline} 
        />
	</li>
    })}
</ul>
}