import React from 'react';
import {addPostAtionCreator} from '../../../Redux/profile-reducer';
import { connect } from 'react-redux';
import AddPostForm from './MyPosts';
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsMap = props.posts.map ( p => <Post message={p.post} count={p.likes}/>);
  const addNewMessage = (text) => {
    props.addPost(text.textarea);
  }


  return (
    <div>
      <AddPostForm onSubmit={addNewMessage}/>
      <div className={classes.myPosts}>
        { postsMap }
      </div>
    </div>
  );
};



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(addPostAtionCreator(newPost))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);


export default MyPostsContainer;
