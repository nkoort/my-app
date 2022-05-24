import { connect } from "react-redux";
import Follow from "./Follow";


let mapStateToProps = (store) => {
   debugger;
   return ({
      follow: store.usersPage.followInProgress,
   })
}

export default connect (mapStateToProps, {}) (Follow);
