import React from 'react';
import style from './TextArea.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Common/FormsControl/FormsControls';
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators';


const maxLength = maxLengthCreator(10);

const TextArea = (props) => {

  return (
    <div className={style.textAreaElement}>
      <form onSubmit={props.handleSubmit}>
        <div className={style.textAreaBlock}>
        <Field component={Textarea} name={'textarea'} placeholder='New messages'
            validate={[requiredField, maxLength]}/>
          <div className={style.button}>
            <button className={style.buttonText}>ОТПРАВИТЬ</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export const TextAreaForm = reduxForm({ form: 'newMessages' })(TextArea);

export default TextAreaForm;