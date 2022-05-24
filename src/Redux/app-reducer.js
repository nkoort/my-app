import { profileAPI } from "../api/api";
import { authMeData } from "./auth-reducer";


const INITIALIZED = 'INITIALIZED';

let initialState = {
  isAuth: false,
  id: null,
  login: null,
};

const initializedReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED:
      return {
        ...state,
        isAuth: true,
      };
    
    default:
      return state;
  }
};
export const initializedAC = () => ({type: INITIALIZED});

export const init = () => {
    return profileAPI.authMe().then( response => {})
}

export const initializedTH = () => (dispatch) => {
  let initialUser = dispatch(authMeData());

  Promise.all([initialUser]).then(() => {
    dispatch(initializedAC());
  });
    // initialUser.then( () => {
    //     dispatch(initializedAC())
    // });
  // dispatch(initializedAC(response[0].data.data.id, response[0].data.data.login))
  // console.log('auth ok')
};
        
    

export default initializedReducer;
