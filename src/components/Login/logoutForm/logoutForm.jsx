import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './logoutForm.module.css';



class LogoutForm extends React.Component {
  
  logout = () => {
    this.props.logout(false);
  }
  
  render() {
    
    return (
      <div>
        <button onClick={this.logout}>LOGOUT</button>
      </div>
   );
  }
}


export default LogoutForm;