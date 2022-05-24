import { connect } from 'react-redux';
import s from './FriendsContainer.module.css';
import React, { useEffect, useState } from 'react';
import { getFriendsTh } from '../../../Redux/friends-reducer';
import FriendItem from './Friend/Friend';
import { NavLink } from 'react-router-dom';

const FriendsContainer = (props) => {
   useEffect(() => {
      props.getFriends();
   }, [])

   let friends = Object.keys(props.friends).map(key => {
      if (key < 6) {
         return <FriendItem
            name={props.friends[key].name}
            id={props.friends[key].id}
            avatar={props.friends[key].photos.small}
            key={props.friends[key].id} />
      }
   })
   

   return (
      <div className={s.friends}>
         <div className={s.title}>Friends</div>
         <div className={s.items}>
            {friends}
         </div>
         {friends.length > 6 && <OtherFriends/>}

      </div>
   );
};

const OtherFriends = (props) => {
   return (
      <div className={s.otherFriends}>
         <NavLink to='/friends' >
         Список всех друзей
      </NavLink>
      </div>
      
   )
}

let mapStateToProps = (state) => {
   return {
      friends: state.friends.friends,
   }
}





export default connect(mapStateToProps, { getFriends: getFriendsTh, })(FriendsContainer);



