import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css';

const DialogsItem = (props) => {
  const returnActive = navData => navData.isActive ? style.active : style.item;
  let path = '/dialogs/' + props.id

  return (
    <div className={style.item}>
      <div className={style.photo}>
        <img src={props.img} alt="" />
      </div>
      <NavLink to={path} className={returnActive}>{props.name}</NavLink>
      </div>
  )
};

export default DialogsItem;