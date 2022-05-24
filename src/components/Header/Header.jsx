import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import LoginBar from './LoginBar/LoginBar';


const Header = (props) => {
  let login = <NavLink to='/login'>Login</NavLink>
  
  let profileMe = props.profile.profileMe != null ?  <LoginBar profile={props.profile} logOut={props.logOut}/> : <div>User loading...</div>;
  // debugger;
  return ( 
    <header className={style.header}>
        <img src='https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png'></img>
        <div className={style.loginBlock}>
          {props.profile.isAuth == false ? login : profileMe }
        </div>
    </header>

    );
  }

export default Header;