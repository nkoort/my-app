import React from 'react';
import s from './FriendPageItem.module.css';
import avaFriend from '../../../assets/img/avatar2.jpg';
import { NavLink } from 'react-router-dom';



const FriendsPageItem = (props) => {
   // debugger;
   let friendsAvatar = !props.avatar ? avaFriend : props.avatar;

   return (
      <div className={s.friendPage}>
         <div className={s.avatar}>
            <NavLink to={`/profile/${props.id}`}>
               <img src={friendsAvatar} className={s.avatarImg} />
            </NavLink>

         </div>
         <div className={s.description}>
            <NavLink to={`/profile/${props.id}`}>
               <div className={s.name}>{props.name}</div>
            </NavLink>
            <div className={s.id}>{props.id}</div>
         </div>
      </div>

   )
}

{/* <div>{props.id}</div>
         <div>{props.avatar}</div>
         <div>{props.name}</div> */}

export default FriendsPageItem