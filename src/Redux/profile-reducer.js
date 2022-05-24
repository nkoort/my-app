import {
  profileAPI,
  usersAPI
} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS_USER = 'GET_STATUS_USER';


let initialState = {
  posts: [{
      id: 1,
      post: "Hi, how are you?",
      likes: 28,
    },
    {
      id: 2,
      post: "It*s my first post",
      likes: 82,
    },
    {
      id: 3,
      post: "It*s my second post in map element",
      likes: 123,
    },
    {
      id: 4,
      post: "My first post on index.js, good work!!!",
      likes: 2323,
    },
    {
      id: 5,
      post: "My second post on index.js, good work!!!",
      likes: 1543,
    },
    {
      id: 5,
      post: "My first post in state.js!!!!!!!",
      likes: 92,
    },
  ],
  profile: null,
  status: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostItem = {
        id: 5,
        post: action.newPost,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPostItem]
      }
      case SET_USER_PROFILE:
        return {
          ...state,
          profile: action.profile
        }
        case GET_STATUS_USER:
          return {
            ...state,
            status: action.status,
          }
          default:
            return state;
  }
}
export const addPostAtionCreator = (newPost) => ({
  type: ADD_POST,
  newPost
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});
export const getStatusAC = (status) => ({
  type: GET_STATUS_USER,
  status
});


export const getProfileTH = (userId) => async dispatch => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}

export const getStatusTH = (id) => async dispatch => {
  let response = await usersAPI.getStatus(id)
  dispatch(getStatusAC(response.data));
};

export const updateStatusTH = (status) => async dispatch => {
  let response = await usersAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(getStatusAC(status));
  }
}




export default profileReducer;