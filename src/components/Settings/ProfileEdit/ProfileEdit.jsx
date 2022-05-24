import s from './ProfileEdit.module.css';
import ReduxProfileEditForm from './ProfileEditForm/ProfileEditForm';
import { connect } from 'react-redux';
import { getIsAuth } from '../../../Redux/Selectors/authSelector';
import React, { useState } from 'react';
import { profileEdit } from '../../../api/api';
import Preloader from '../../Common/Preloader/preloader';

const ProfileEdit = (props) => {
   let [preload, preloadChange] = useState(false);
   let [status, statusChange] = useState(false);
   let [statusMessage, messageChange] = useState('')
   // useEffect(() => {

   // },[preload]);

   const onSubmit = (props) => {
      preloadChange(true);
      profileEdit.updateProfile(props).then(response => {
         preloadChange(false)
         let resultCode = response.data.resultCode
         if (resultCode === 0) {
            statusChange(true);
         } else if (resultCode === 1) {
            debugger;
            statusChange([true, 'error']);
            messageChange(response.data.messages[0])
         } else if (resultCode != 0 || resultCode != 1) {
            statusChange([true, 'error']);
            messageChange(response.data.messages[0])
         }
      })
      // console.log(true)
   }
   return (
      <div>
         <div className={s.header}>
            <h1>Profile edit</h1>
         </div>
         <div>
            {preload && <Preloader />}
            {status == true && <div className={s.statusMessage}>Данные проофиля успешно обновлено!</div>}
            {status[0] === true && status[1] === 'error' && <div className={s.statusMessageError}>{statusMessage}</div>}
            {!preload && <ReduxProfileEditForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} />}
         </div>

      </div>
   );
};

let mapStateToProps = (state) => ({
   isAuth: getIsAuth(state),
   profile: state.auth.profile,

})
export default connect(mapStateToProps, {})(ProfileEdit);