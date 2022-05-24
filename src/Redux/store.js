import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reduser";



let store = {
  _state: {
    profilePage: {
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
      newText: 'New post text',
    },
    messagesPage: {
      messages: [
        {id: 1, message: "Lorem ipsum dolor sit amet.", type: 'my'},
        {id: 1, message: "Lorem ipsum dolor sit amet.", type: 'comp'},
        {id: 1, message: "Lorem ipsum dolor sit amet.", type: 'comp'},
        {id: 1, message: "Lorem ipsum dolor sit amet.", type: 'my'},
        {id: 1, message: "Lorem ipsum dolor sit amet.", type: 'my'},
        {id: 1, message: "Lorem ipsum dolor sit amet.", type: 'comp'},
        
      ],
      dialogs: [
        {id: 1, name: "Item 1", img: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true'},
        {id: 2, name: "Item 2", img: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true'},
        {id: 3, name: "Item 3", img: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true'},
        {id: 4, name: "Item 4", img: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true'},
      ],
      newMessage: 'New message!!',
    },
    sidebarBlock: {
      
    },
  },
  _rerenderEntireTree () {
    console.log('change state')
  },

  getState () {
    return this._state;
  },
  subsctibe (observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch (action) {
    profileReducer(this._state.profilePage, action)
    dialogsReducer(this._state.messagesPage, action)
    sidebarReducer(this._state.sidebarBlock, action)

    this._rerenderEntireTree(this._state);
  },
  
}


export default store;
