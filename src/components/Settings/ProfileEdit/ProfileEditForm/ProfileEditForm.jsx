import { Field, reduxForm } from 'redux-form';
import s from './ProfileEditForm.module.css';
import { CheckBoxEditor, Input, InputEdit, InputEditor } from '../../../Common/FormsControl/FormsControls';
import { requiredField, maxLengthCreator } from '../../../../utils/validators/validators';
import React, { useEffect, useState } from 'react';

const ProfileEditForm = (props) => {

   let contactsMe = (
      Object.keys(props.profile.contacts).map(key => {
         return <Field
            key={key}
            component={InputEdit}
            name={'contacts.' + key}
            inputName={key}/>
      })
   )
   return (
      <form className={s.profileEditForm} onSubmit={props.handleSubmit}>

         <Field
            component={InputEdit}
            name={'fullName'}
            inputName={'ФИО'}/>
         <Field
            component={InputEdit}
            name={'aboutMe'}
            inputName={'Обо мне'} />
         <Field
            component={InputEdit}
            name={'lookingForAJobDescription'}
            inputName={'Почему я ищу работу'} />
         <Field
            component={CheckBoxEditor}
            name={'lookingForAJob'}
            inputName={'Ищу работу?'} />
         <div>
            <h2>Contacts</h2>
            <div>
               {contactsMe}
            </div>
         </div>

         <div className={s.editButton}>
            <button className={s.editButton}>Save</button>
         </div>
      </form>
   );
};

const ReduxProfileEditForm = reduxForm({
   form: 'profileEdit',
})(ProfileEditForm)

export default ReduxProfileEditForm;