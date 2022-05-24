import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { followTC ,  unFollowTC ,  setTotalUsersCount, toggleFollowInProgress, getUsersThunkCreator } from '../../Redux/findUsers-reducer';
import { getIsAuth } from '../../Redux/Selectors/authSelector';
import { getUsers, getPageSize, getTotalUsersCountSelector, getcurrentPageSelector, getIsFetchingSelector, getFollowInProgressSelector } from '../../Redux/Selectors/findUsersSelectors';
import FindUsers from './FindUsers';



    // follow: (userID) => {
    //   dispatch(followAC(userID));
    // }

let mapStateToProps = (state) => {

  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getcurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followInProgress: getFollowInProgressSelector(state),
    isAuth: getIsAuth(state),
  }
}


export default compose (
  
  connect(
    mapStateToProps,
    { 
      setTotalUsersCount: setTotalUsersCount,
      toggleFollowInProgress: toggleFollowInProgress,
      getUsers: getUsersThunkCreator,
      follow: followTC,
      unfollow: unFollowTC,
    }),
    withAuthRedirect,
    
  ) 
    (FindUsers);
