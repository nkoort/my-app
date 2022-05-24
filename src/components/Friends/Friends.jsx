import React from 'react';
import FriendsPageItem from './FriendPageItem/FriendPageItem';
import s from './Friends.module.css';





const FriendsPage = (props) => {
   debugger;

   let friends = Object.keys(props.friends).map(key => {
         return <FriendsPageItem
            name={props.friends[key].name}
            id={props.friends[key].id}
            avatar={props.friends[key].photos.large}
             />
   })

   return (
      <div>
         <div className={s.friendsCont}>{`Количество друзей: ${props.friends.length}`} </div>
         <div>{friends}</div>
      </div>
      
   )
}



export default FriendsPage