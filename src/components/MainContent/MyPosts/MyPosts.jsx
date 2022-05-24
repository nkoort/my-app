import React from 'react';
import classes from "./MyPosts.module.css";
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../Common/FormsControl/FormsControls';

const maxLength = maxLengthCreator(5);

const AddPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}> 
      <div className={classes.newPost}>
        <div>
          <Field component={Textarea} name={'textarea'} placeholder='New messages'
            validate={[requiredField, maxLength]}/>
        </div>
        <div>
          <button>ADD</button>
        </div>
      </div>
    </form>
  )
}

const AddPostForm = reduxForm ({form: 'newPost'}) (AddPost);





export default AddPostForm;
