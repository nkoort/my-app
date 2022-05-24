import React from "react";
import style from "./User.module.css";
import { NavLink } from 'react-router-dom';


const User = (props) => {

  let photoDef = 'https://w7.pngwing.com/pngs/953/222/png-transparent-computer-icons-avatar-business-user-profile-avatar-heroes-logo-monochrome.png'

  let users = props.users;
  let name = users.name;
  let photo = users.photos.small != null ? users.photos.small : photoDef;
  let info = users.status;
  let country = "Some country"//users.location.country;
  let city = "Some city"//users.location.city;

  // Переменная button получает тернарное выражение функции if
  // Если users.followed являестя истинной то возвращает значение после ?
  // если же оно являестя ложью, то возвращает значение после :
  let button = users.followed
    ? <button disabled={props.followInProgress.some(id => id === users.id)} 
      onClick={() => { props.follow(users.id); }} className={style.follow}> FOLLOW </button>
    : <button disabled={props.followInProgress.some(id => id === users.id)} 
    onClick={() => { props.unfollow(users.id); }} className={style.unfollow}> UNFOLLOW </button>;


  return (
    <div className={style.user}>
      <div className={style.photoBlock}>
        <div className={style.photo}>
          <NavLink to={`/profile/` + users.id}>
            <img src={photo} alt="" />
          </NavLink>
        </div>
        <div className={style.follow}>
          {button}
        </div>
      </div>
      <div className={style.description}>
        <div className={style.left}>
          <NavLink to={`/profile/` + users.id}>
            <div className={style.name}>{name}' '{users.id}</div>
          </NavLink>
          <div className={style.info}>{info}</div>
        </div>
        <div className={style.right}>
          <div className={style.country}>{country}</div>
          <div className={style.city}>{city}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
