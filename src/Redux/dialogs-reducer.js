const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


let initialState = {
    messages: [
      {id: 1, message: "Lorem ipsum dolor sit amet.", type: 'my'},
      {id: 1, message: "Lorem ipsum dolor sit amet.", type: 'comp'},
      
    ],
    dialogs: [
      {id: 1, name: "Item 1", img: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true'},
    ],
  };

const dialogsReducer = (state = initialState, action) => {

    

    switch(action.type) {
        case ADD_MESSAGE:
            let newMessageObj = {
                id: 5,
                message: action.newMessage,
                type: 'my',
              };;
              return {
                ...state,
                messages: [...state.messages, newMessageObj],
              }
        
        default:
            return state;
    }
}

export const addMessageAtionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage});

export default dialogsReducer;