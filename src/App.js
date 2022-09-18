import "./App.css";
import React, { useState } from "react";
import Footer from "./components/footer";
import HeaderTile from "./components/Header";
import UserProfile from "./components/UserProfile/UserProfile";
import Post from "./components/Posts/Post";
import Comments from "./components/Comments/Comments";
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
          handlePostClick={handlePostClick}
          {...currentProfile}
        ></UserProfile>
      );
    else if (currentView === 1)
      return (
        <Post
          showAllComments={showAllComments}
          addNewCommentHandler={addNewCommentHandler}
          handleLike={handleLike}
          currentUser={currentUser}
          post={currentPost}
          userid={currentProfile.userid}
          displayPic={currentProfile.displayPic}
        ></Post>
      );
    else
      return (
        <Comments
          currentPost={currentPost}
          currentProfile={currentProfile}
          currentUser={currentUser}
          addNewCommentHandler={addNewCommentHandler}
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
  const handlePostClick = function (postkey) {
    if (currentView === 0) {
      setCurrentPost(
        profilePosts.filter((post) => post.id === Number(postkey))[0]
      );
      setCurrentView(1);
    }
  };
  const showAllComments = function () {
    if (currentView === 1) {
      setCurrentView(2);
    }
  };
  const addNewCommentHandler = function (newComment) {
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
  const getHeaderTileTitle = function () {
    if (currentView === 2) return "comments";
    return currentProfile.userid;
  };
  return (
    <div className="App">
      <HeaderTile
        title={getHeaderTileTitle()}
        goBackHandler={goBackHandler}
      ></HeaderTile>
      <div className="view-container">{getCurrentView()}</div>
      <Footer className="margin_top_0" {...currentUser}></Footer>
    </div>
  );
}

export default App;
