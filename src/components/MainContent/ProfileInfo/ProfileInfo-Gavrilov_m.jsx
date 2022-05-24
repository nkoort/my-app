import Preloader from '../../Common/Preloader/preloader';
import style from './ProfileInfo.module.css';
import avatar from '../../../assets/img/avatar-svgrepo-com.svg';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
// import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FollowContainer from '../../Common/Follow/FollowContainer';

const ProfileInfo = (props) => {

   if (props.profile != null) {

      let photoDef = avatar
      let photo = props.profile.photos.large != null ? props.profile.photos.large : photoDef;
      let name = props.profile.fullName != null ? props.profile.fullName : 'User'
      let aboutme = props.profile.aboutMe != null ? props.profile.aboutMe : 'about me'
      let descr = props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : 'description'
      let id = props.profile.userId != null ? props.profile.userId : 'none'
      let status = props.status != '' ? props.status : 'Статус не указан';

      const onChangePhoto = (e) => {
         if (e.target.files.length) {
            props.updateProfilePhoto(e.target.files[0])
         }
      }

      let photoInput = () => {
         if (props.authMeId === props.profile.userId) {
            return (
               <div>
                  <input type='file' className={style.button} onChange={onChangePhoto} />
                  <NavLink to='/settings/edit'>
                     <button>Edit profile</button>
                  </NavLink>
               </div>
            )
         }
      }



      // props.authMeId === props.profile.userId ? <input type='file' className={style.button} onChange={onChangePhoto} /> : <div></div>;
      return (
         <div className={style.profileInfo}>
            <div className={style.mainProfile}>
               <div className={style.avatar}>
                  <img className={style.photo} src={photo} alt={props.photoName} />
               </div>

               <div>{name}</div>
               <div className={style.profileStatus}>
                  <ProfileStatus status={status} updateStatus={props.updateStatus} id={props.profile.userId} idMe={props.authMeId} />
               </div>
               <div>{aboutme}</div>
               <div>{descr}</div>
               <div>{`User id: `}{id}</div>
            </div>
            <div className={style.mainProfileSettings}>
               {photoInput()}
            </div>
         </div>
      );
   } else {
      return (
         <Preloader />
      )
   }

};



export default ProfileInfo;