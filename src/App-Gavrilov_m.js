// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header/Header";
import style from "./App.module.css";
import { Route, Routes, Router } from "react-router-dom";
import SIdebarContainer from "./components/Sidebar/SIdebarContainer";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import MainContenContainer from "./components/MainContent/MainContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import ProfileEdit from './components/Settings/ProfileEdit/ProfileEdit';
import { Suspense, lazy, Component } from "react";
import { connect } from "react-redux";
import { initializedTH } from "./Redux/app-reducer";
import Preloader from "./components/Common/Preloader/preloader";
import FriendsPageContainer from "./components/Friends/FriendsPageContainer";

const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const NewsContainer = lazy(() =>
  import("./components/News/NewsContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initialized();
  }

  render() {

    if (!this.props.initializedUser) {
      return <Preloader />;
    }
    return (
      <div className={style.wrapper}>
        <HeaderContainer />
        <SIdebarContainer />
        <div className={style.content}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/news" element={<NewsContainer />} />
              </Routes>
            </Suspense>

            <Routes>
              <Route path="/profile/*" element={<MainContenContainer />} />
              <Route path="/music" element={<MusicContainer />} />
              <Route path="/findusers" element={<FindUsersContainer />} />
              <Route path="/friends" element={<FriendsPageContainer />} />

              <Route path="/settings" element={<SettingsContainer />} />
              <Route path="/settings/edit" element={<ProfileEdit />} />
              
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initializedUser: state.initializedUser.isAuth,
  id: state.auth,
});

export default connect(mapStateToProps, { initialized: initializedTH })(App);
