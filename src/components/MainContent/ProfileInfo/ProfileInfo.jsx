import Preloader from '../../Common/Preloader/preloader';
import style from './ProfileInfo.module.css';
import avatar from '../../../assets/img/avatar-svgrepo-com.svg';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  
  if (props.profile != null) {
    
    let photoDef = avatar
    let photo = props.profile.photos.large != null ? props.profile.photos.large : photoDef;
    let name = props.profile.fullName !=null ? props.profile.fullName : 'User'
    let aboutme = props.profile.aboutMe != null ? props.profile.aboutMe : 'about me'
    let descr = props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : 'description'
    let id = props.profile.userId != null ? props.profile.userId : 'none'
    let status = props.status != '' ? props.status : 'Статус не указан';
    return (
      <div className={style.profileInfo}>
        <img className={style.photo} src={photo} />
        <div>{name}</div>
        <div className={style.profileStatus}>
          <ProfileStatus status={status} updateStatus={props.updateStatus}/>
        </div>
        <div>{aboutme}</div>
        <div>{descr}</div>
        <div>{`User id: `}{id}</div>
      </div>
    );
  } else {
    return (
      <Preloader />
    )
  }
  
};



export default ProfileInfo;