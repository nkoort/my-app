import { addMessageAtionCreator, updateMessageTextAtionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    dialogs: state.messagesPage.dialogs,
    newMessage: state.messagesPage.newMessage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessage) => {
      dispatch( addMessageAtionCreator(newMessage) )
    },
  }
}


export default compose (
  
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  
) (Dialogs);
