import "./App.css";
import React, { useState } from "react";
import Footer from "./components/footer";
import HeaderTile from "./components/Header";
import UserProfile from "./components/UserProfile/UserProfile";
import Post from "./components/Posts/Post";
import Comments from "./components/Comments/Comments";
import profile1 from "./assets/profile-1.jpeg";
import data from "./data";

function App() {
  const currentProfile = data.profile;
  const currentUser = data.currentUser;
  const [currentView, setCurrentView] = useState(0);
  const [currentPost, setCurrentPost] = useState(1);
  const [profilePosts, setprofilePosts] = useState(data.profile.posts);
  const getCurrentView = function () {
    if (currentView === 0)
      return (
        <UserProfile
          goBackHandler={goBackHandler}
          {...currentProfile}
          handlePicClick={handlePicClick}
          title={currentProfile.userid}
        ></UserProfile>
      );
    else if (currentView === 1)
      return (
        <Post
          goBackHandler={goBackHandler}
          userid={currentProfile.userid}
          displayPic={currentProfile.displayPic}
          post={currentPost}
          showAllComments={showAllComments}
          currentUser={currentUser}
          addNewComment={addNewComment}
          handleLike={handleLike}
          title={currentProfile.userid}
        ></Post>
      );
    else
      return (
        <Comments
          currentPost={currentPost}
          goBackHandler={goBackHandler}
          currentProfile={currentProfile}
          currentUser={currentUser}
          addNewComment={addNewComment}
          title={"comments"}
        ></Comments>
      );
  };
  const goBackHandler = function () {
    if (currentView === 1) {
      setCurrentView(0);
    } else if (currentView === 2) {
      setCurrentView(1);
    }
  };
  const handlePicClick = function (postKey) {
    if (currentView === 0) {
      setCurrentPost(
        profilePosts.filter((post) => post.id === Number(postKey))[0]
      );
      setCurrentView(1);
    }
  };
  const showAllComments = function () {
    if (currentView === 1) {
      setCurrentView(2);
    }
  };
  const addNewComment = function (newComment) {
    let newProfilePosts = profilePosts.map((post) => {
      if (post.id === currentPost.id) {
        post.comments.push(newComment);
        return post;
      }
      return post;
    });
    setprofilePosts(newProfilePosts);
  };
  const handleLike = function () {
    let newProfilePosts = profilePosts.map((post) => {
      if (post.id === currentPost.id) {
        post.isLiked = !post.isLiked;
        return post;
      }
      return post;
    });
    setprofilePosts(newProfilePosts);
  };
  return (
    <div className="App">
      <div className="view-container">{getCurrentView()}</div>
      <Footer className="margin_top_0" {...currentUser}></Footer>
    </div>
  );
}

export default App;
