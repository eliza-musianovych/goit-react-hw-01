import css from "./Profile.module.css";
import { MdAlternateEmail } from "react-icons/md";
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function Profile ({name, tag, location, image, stats}) {
        return (
<div className={css.profile}>
  <div className={css.profileName}>
    <img className={css.img}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}><MdAlternateEmail className={css.icon} />{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.statusList}>
    {Object.keys(stats).map(key => {
        return <li key={key} className={css.statusItem}>
      <span className={css.status}>{capitalize(key)}</span>
      <span className={css.statusValue}>{stats[key]}</span>
   </li>
})}
  </ul>
</div>
    )
}