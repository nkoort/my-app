import { NavLink } from 'react-router-dom';
import FriendsBlock from './Friends/Friends';
import style from './Sidebar.module.css';

const Sidebar = (props) => {
  const returnActive = navData => navData.isActive ? style.active : style.item;
  //Функция которая корректно добавляет класс active для активной ссылки, далее она вызывается как className для каждой ссылки.
  //Чтобы присвоить какой-то стиль для этого класа, использовать тег 'a' нету необходимости, а следует брать родительский элемент...
  //...в котором лежит ссылка, в данном случае класс 'item' и добавлять к нему соответсвующий клас active, получает в стилях....
  //... класс item.active{ color: #fff; }
  
  return (
    
    <div className={style.sidebar}>
      <div className={style.sidebarMenu}>
        <div className={style.item}>
          <NavLink to='/profile' className={returnActive}>Profile</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/dialogs' className={returnActive}>Messages</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/news' className={returnActive}>News</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/music' className={returnActive}>Music</NavLink>
        </div>
        <div className={style.findUsers}>
          <NavLink to='/findusers' className={returnActive}>Find Users</NavLink>
        </div>
        <div className={style.setting}>
          <NavLink to='/settings' className={returnActive}>Settings</NavLink>
        </div>
        
      </div>
      <div className={style.friends}>
        <FriendsBlock stateFriends={props.state.friends} dispatch={props.dispatch} key='1'/>
      </div>
    </div>
  );
};


export default Sidebar;
