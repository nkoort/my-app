import { NavLink } from 'react-router-dom';
import s from './Friend.module.css';
import avatar from '../../../../assets/img/avatar2.jpg';

const FriendItem = (props) => {
   let avatarF = props.avatar ? props.avatar : avatar;

   return (
      <div  key={props.id}>
         <NavLink to={`/profile/${props.id}`} className={s.friend}>
            <div className={s.photo} key={props.id}>
               <img key={props.id} src={avatarF} alt="" />
            </div>
            <div className={s.name}>{props.name}</div>
         </NavLink>
      </div>
   );
};


export default FriendItem;
