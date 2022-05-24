import { Field, reduxForm } from 'redux-form';
import style from './LoginFrom.module.css';
import { Input } from '../../Common/FormsControl/FormsControls';
import {requiredField, maxLengthCreator} from '../../../utils/validators/validators';

let maxLength = maxLengthCreator(50);

const LoginFrom = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className={style.formLogin}> 
        <div>
          <Field placeholder='Login' component={Input} validate={[requiredField, maxLength]} name={'login'}/>
        </div>
        <div>
          <Field placeholder='Password' component={Input} validate={[requiredField, maxLength]} name={'password'}/>
        </div>
        <div>
          <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
        </div>
        <div>
          {props.error}
        </div>
        <div>
          <button >Login</button>
        </div>
      </form>
  );
};

const ReduxLoginForm = reduxForm ({
  form: 'login',
}) (LoginFrom)

export default ReduxLoginForm;