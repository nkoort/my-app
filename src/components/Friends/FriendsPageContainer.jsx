import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import FriendsPage from './Friends';





let mapStateToProps = (state) => {

  return {
    friends: state.friends.friends,

  }
}


export default compose (
  connect(mapStateToProps, {}), 
  withAuthRedirect,
  ) (FriendsPage);
