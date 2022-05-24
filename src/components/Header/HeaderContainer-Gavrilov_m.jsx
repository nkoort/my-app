import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {logOutTH} from '../../Redux/auth-reducer';
import { getProfileTH } from '../../Redux/profile-reducer';
import { getAuth } from '../../Redux/Selectors/authSelector';




const HeaderContainer = (props) => {
  // debugger

  return (
    <Header {...props} logOut={props.logOut}/>
    )
}



let mapStateToProps = (state) => ({
  profile: getAuth(state),
  photo: state.auth.profile.photos.small
})


export default connect(mapStateToProps, {logOut: logOutTH, getProfile: getProfileTH,}) (HeaderContainer);
