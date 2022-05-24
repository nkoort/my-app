import MainContent from './MainContent';
import classes from './MainContent.module.css';
import React from "react";
import { connect } from 'react-redux';
import { getProfileTH, getStatusTH, updateStatusTH } from '../../Redux/profile-reducer';
import {useMatch ,Navigate} from "react-router-dom";
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getAuth, getIsAuth } from '../../Redux/Selectors/authSelector';

const ProfileHeader = (props) => {
  return(
    <img  className={classes.logo} src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg'></img>
  )
};


let udId = null;

class MainContenContainer extends React.Component {
  componentDidMount() {
    let usId = this.props.match.params.userId;
    this.props.getProfile(usId);
    this.props.getStatus(usId);
    // } else {
    //   <Navigate to='/login' />
    // }
    
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      let usId = this.props.match.params.userId;
      this.props.getProfile(usId);
      this.props.getStatus(usId);
    };
  };

  render () {
    // debugger;
    return (
      <div className={classes.mainContent}>
        <MainContent {...this.props} updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
}


let ProfileURLMatch = (props) => {
  // debugger;
  let match = useMatch('/profile/:userId');
  // debugger;
  if (match === null) {
    if (!props.authMeId) {
      let id = 0
      match = ({params : {userId: id}});
    } else {
      let id = props.authMeId.id
      match = ({params : {userId: id}});
    }
  }
  return <MainContenContainer {...props} match={match}/>;
}

let mapStateToProps = (state) => ({
  authMeId: getAuth(state).profileMe,
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: getIsAuth(state),

})
  export default compose (
    
    connect ( mapStateToProps, { getProfile: getProfileTH, getStatus: getStatusTH, updateStatus: updateStatusTH,}),
    // withAuthRedirect,
    
  ) (ProfileURLMatch);

