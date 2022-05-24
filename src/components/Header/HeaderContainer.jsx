import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {logOutTH} from '../../Redux/auth-reducer';
import { getProfileTH } from '../../Redux/profile-reducer';
import { getAuth } from '../../Redux/Selectors/authSelector';

class HeaderContainer extends React.Component {
  componentDidMount() {
  }
  render () {
    // debugger;
    return (
    <Header {...this.props} logOut={this.props.logOut}/>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: getAuth(state),
})





export default connect(
  mapStateToProps, {
    logOut : logOutTH,
    getProfile: getProfileTH,

}) (HeaderContainer);
