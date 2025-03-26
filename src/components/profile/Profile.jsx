import css from "./Profile.module.css";
import { MdAlternateEmail } from "react-icons/md";
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function Profile ({name, tag, location, image, stats}) {
        return (
<div className={css.profile}>
  <div className={css[`profile-name`]}>
    <img className={css.img}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}><MdAlternateEmail className={css.icon} />{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css[`status-list`]}>
    {Object.keys(stats).map(key => {
        return <li key={key} className={css[`status-item`]}>
      <span className={css.status}>{capitalize(key)}</span>
      <span className={css[`status-value`]}>{stats[key]}</span>
   </li>
})}
  </ul>
</div>
    )
}