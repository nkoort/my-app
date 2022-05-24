import style from './LoginBar.module.css';
import { NavLink } from 'react-router-dom';
import LogoutForm from '../../Login/logoutForm/logoutForm';



const LoginBar = (props) => {
// debugger

  return (
    <div className={style.loginBar}>
      <NavLink to={'/profile/' + props.profile.userId} >
        <div className={style.userBar}>
          <div>
            <div className={style.userName}>{props.profile.fullName}</div>
          </div>
          <div>
            <img src={props.photo} className={style.avatar}/>
          </div>
        </div>

      </NavLink>
      <div className={style.popupBar}>
        <LogoutForm logout={props.logOut} />
      </div>
    </div>
  )
}

export default LoginBar;