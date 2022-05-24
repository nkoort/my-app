import { profileAPI, usersAPI } from "../api/api";
import { authMeData } from "./auth-reducer";


const GET_FRIENDS = 'friends/GET_FRIENDS';

let initialState = {
   friends : {}
};
const friendsRecucer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.friends
      };
    
    default:
      return state;
  }
};
export const getFriends = (friends) => ({type: GET_FRIENDS, friends});



export const getFriendsTh = () => async dispatch => {
   let response = await usersAPI.getFriends();
   dispatch(getFriends(response.data.items))
   // debugger;
};
        
    

export default friendsRecucer;
