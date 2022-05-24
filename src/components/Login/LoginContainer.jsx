import { loginAPI } from '../../api/api';
import Login from './Login';
import LogoutForm from './logoutForm/logoutForm';
// import { authMeTH } from '../../Redux/auth-reducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import { logOutTH, logInTH } from '../../Redux//auth-reducer';
import {Navigate} from 'react-router-dom';
import { getIsAuth } from '../../Redux/Selectors/authSelector';



class LoginContainer extends React.Component {
  state = {
    isAuth: this.props.isAuth,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isAuth != this.props.isAuth && this.props.isAuth === true) {
      this.setState({
        isAuth: true,
      });
    } else if (prevProps.isAuth != this.props.isAuth && this.props.isAuth === false) {
      this.setState({
        isAuth: false,
      });
    }
  }


  login = () => {
    // debugger;
    // if (!this.state.isAuth) {
    if (!this.state.isAuth) {
      return <Login login={this.props.logIn} />
    }
    // return <LogoutForm logout={this.props.logOut}/>
    return <Navigate to='/profile' />
  }

  render() {
    // console.log('global state = ' + this.props.isAuth);
    return (
      <div>
        {this.login()}
        {/* <Login login={loginAPI.login} /> */}
      </div>
    );
  }
}




let mapStateToProps = (state) => ({
  profile: state.auth,
  isAuth : getIsAuth(state),

})
export default compose(

  connect(mapStateToProps, {  logOut: logOutTH, logIn: logInTH,}),
  // withAuthRedirect,

)(LoginContainer);