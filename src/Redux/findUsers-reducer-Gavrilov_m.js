import {
   usersAPI
} from '../api/api';
import {
   getFriendsTh
} from './friends-reducer';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_PROGRESS = 'TOGGLE_IS_FOLLOW_PROGRESS'

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followInProgress: [],

};

const findUsersReducer = (state = initialState, action) => {
   switch (action.type) {

      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {
                     ...u,
                     followed: true
                  }
               }
               return u;
            }),
         }

         case UNFOLLOW:
            return {
               ...state,
               users: state.users.map(u => {
                  if (u.id === action.userId) {
                     return {
                        ...u,
                        followed: false
                     }
                  }
                  return u;
               }),
            }

            case SET_USERS: {
               return {
                  ...state,
                  users: action.users
               }
            }
            case SET_CURRENT_PAGE: {
               return {
                  ...state,
                  currentPage: action.currentPage
               }
            }
            case SET_TOTAL_USERS_COUNT: {
               return {
                  ...state,
                  totalUsersCount: action.totalCount
               }
            }
            case TOGGLE_IS_FETCHING: {
               return {
                  ...state,
                  isFetching: action.isFetching
               }
            }
            case TOGGLE_IS_FOLLOW_PROGRESS: {
               return {
                  ...state,
                  followInProgress: action.followInProgress ? [...state.followInProgress, action.userId] : state.followInProgress.filter(id => id != action.userId)
               }
            }

            default:
               return state;
   }
}

export const followAC = (userId) => ({
   type: FOLLOW,
   userId
});
export const unfollowAC = (userId) => ({
   type: UNFOLLOW,
   userId
});
export const setUsersAC = (users) => ({
   type: SET_USERS,
   users
});
export const setCurrentPage = (currentPage) => ({
   type: SET_CURRENT_PAGE,
   currentPage: currentPage
});
export const setTotalUsersCount = (totalCount) => ({
   type: SET_TOTAL_USERS_COUNT,
   totalCount
});
export const setIsFetching = (isFetching) => ({
   type: TOGGLE_IS_FETCHING,
   isFetching
});
export const toggleFollowInProgress = (followInProgress, userId) => ({
   type: TOGGLE_IS_FOLLOW_PROGRESS,
   followInProgress,
   userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
   dispatch(setCurrentPage(currentPage))
   dispatch(setIsFetching(true));

   let response = await usersAPI.getUsers(currentPage, pageSize);
   dispatch(setIsFetching(false));
   dispatch(setUsersAC(response.items));
   dispatch(setTotalUsersCount(response.totalCount));
}

export const followTC = (userId) => async (dispatch) => {
   dispatch(toggleFollowInProgress(true, userId));
   let response = await usersAPI.unfollow(userId);
   dispatch(unfollowAC(userId))
   dispatch(toggleFollowInProgress(false, userId));
   if (response.data.resultCode === 0) {
      debugger;
      dispatch(getFriendsTh());
   }

}

export const unFollowTC = (userId) => async (dispatch) => {
   dispatch(toggleFollowInProgress(true, userId));
   let response = await usersAPI.follow(userId)
   dispatch(followAC(userId))
   dispatch(toggleFollowInProgress(false, userId));
   if (response.data.resultCode === 0) {
      debugger;
      dispatch(getFriendsTh());
   }
}



export default findUsersReducer;