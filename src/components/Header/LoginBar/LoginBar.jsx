import style from './LoginBar.module.css';
import { NavLink } from 'react-router-dom';
import LogoutForm from '../../Login/logoutForm/logoutForm';



const LoginBar = (props) => {
  // debugger;
  return (
    <div className={style.loginBar}>
      <NavLink to={'/profile/' + props.profile.profileMe.id} >
        <div>{props.profile.profileMe.login}</div>
      </NavLink>
      <div className={style.popupBar}>
        <LogoutForm logout={props.logOut}/>
      </div>
    </div>

  )
}

export default LoginBar;