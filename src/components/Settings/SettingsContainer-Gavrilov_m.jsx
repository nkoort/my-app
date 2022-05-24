import Settings from './Settings';
import { connect } from 'react-redux';
import { getIsAuth } from '../../Redux/Selectors/authSelector';

const SettingsContainer = (props) => {

    return ( 
      <div>
        <Settings/>
      </div>
    );
  };

  let mapStateToProps = (state) => ({
   isAuth : getIsAuth(state),
 
 })
 export default connect(mapStateToProps, {}) (SettingsContainer);