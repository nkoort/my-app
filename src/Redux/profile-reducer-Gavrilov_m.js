import { profileAPI, usersAPI } from "../api/api";
import { nanoid } from "nanoid";
let size = 5;
// let idTst = nanoid(size)
// debugger;
const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const GET_STATUS_USER = "profile/GET_STATUS_USER";
const PUT_PROFILE_PHOTO = "profile/PUT_PROFILE_PHOTO";

let initialState = {
  posts: [
    {
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
  ],
  profile: {
    photos: {
      small: null,
      large: null,
    },
  },
  status: null,
  preload: false,
  statusEditor: false,
  statusMessage: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPostItem = {
        id: nanoid(size),
        post: action.newPost,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPostItem],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case GET_STATUS_USER:
      return {
        ...state,
        status: action.status,
      };
    case PUT_PROFILE_PHOTO:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.newPhotoUser,
        },
      };
    default:
      return state;
  }
};
export const addPostAtionCreator = (newPost) => ({
  type: ADD_POST,
  newPost,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getStatusAC = (status) => ({
  type: GET_STATUS_USER,
  status,
});

export const setNewPhoto = (newPhotoUser) => ({
  type: PUT_PROFILE_PHOTO,
  newPhotoUser,
});

export const getProfileTH = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatusTH = (id) => async (dispatch) => {
  let response = await usersAPI.getStatus(id);
  dispatch(getStatusAC(response.data));
};

export const updateStatusTH = (status) => async (dispatch) => {
  let response = await usersAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(getStatusAC(status));
  }
};

export const updateProfilePhotoTH = (newPhoto) => async (dispatch) => {
  let response = await usersAPI.updatePhoto(newPhoto);
  if (response.data.resultCode === 0) {
    dispatch(setNewPhoto(response.data.data.photos));
  }
};

export default profileReducer;
