// import React from "react";
import { useContext } from "react";
import AllPosts from "../components/Posts/AllPosts";
import LogInPage from "./LogInPage";
import { appContext } from "../context/context-app";

const PostsPage = () => {
  const logInState = useContext(appContext).loginState;

  if (!logInState) {
    return <LogInPage />;
  }

  return <AllPosts />;
};

export default PostsPage;
