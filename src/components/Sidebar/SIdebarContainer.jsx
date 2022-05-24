import Sidebar from "./Sidebar";
import { connect } from 'react-redux';
import store from "../../Redux/redux-store";

// const SIdebarContainer = (props) => {
  
//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//           return <Sidebar  state={store.getState().sidebarBlock} dispatch={store.dispatch}/>
//         }
//       }
//     </StoreContext.Consumer>
//   );
// };


let mapStateToProps = (state) => {
  return {
    state: state.sidebarBlock,
    dispatch: state.dispatch,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}
const syperSIdebarContainer = connect(mapStateToProps, mapDispatchToProps) (Sidebar);

export default syperSIdebarContainer;
