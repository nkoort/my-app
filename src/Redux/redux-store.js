import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reduser";
import findUsersReducer from "./findUsers-reducer";
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form';
import initializedReducer from './app-reducer';

let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    sidebarBlock: sidebarReducer,
    usersPage: findUsersReducer,
    auth: authReducer,
    initializedUser: initializedReducer,
    form: formReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;


export default store;