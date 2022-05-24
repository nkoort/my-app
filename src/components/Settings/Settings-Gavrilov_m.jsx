import s from './Settings.module.css';
import { NavLink } from 'react-router-dom';

const Settings = (props) => {

    return ( 
      <div>
        <div className={s.header}>
           <h1>Settings menu</h1>
        </div>
        <ul>
           <li>
              <NavLink to='/settings/edit'>
                 Profile edit
              </NavLink>
           </li>
        </ul>
      </div>
    );
  };

export default Settings;