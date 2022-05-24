import classes from './MainContent.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileHeader = (props) => {

  
  return(
    <img  className={classes.logo} src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg'></img>
  )
};



const MainContent = (props) => {
  if (props.match.params.userId === 0) {
    return (
      <div>Profile not found</div>
    )
  }
  return ( 
    <div className={classes.mainContent}>
      <ProfileHeader />
      <ProfileInfo  updateProfilePhoto={props.updateProfilePhoto}
        profile={props.profile} 
        status={props.status} 
        updateStatus={props.updateStatus} 
        authMeId={props.authMeId.id}
        photoName={props.photoName} />
      <MyPostsContainer />
    </div>
  );
};



export default MainContent;