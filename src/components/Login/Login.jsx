
import ReduxLoginForm from './LoginFrom/LoginFrom';


const Login = (props) => {
  // debugger;
  const onSubmit = (formData) => {
    console.log(formData)
    // debugger;
    let email = formData.login;
    let pass = formData.password;
    let remember = formData.rememberMe;
    props.login(email, pass, remember, true)
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;