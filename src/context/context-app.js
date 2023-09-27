import { useState, createContext } from "react";

const appContext = createContext({
  loginState: false,
  logInHandler: () => {},
  userId: "",
  userIdHandler: () => {},
  newPosts: [],
  addNewPost: () => {},
  deletePost: () => {},
});

const AppContextProvider = (props) => {
  const [loginState, setLogInState] = useState(false);
  const [userId, setUserId] = useState("");
  const [newPosts, setNewPosts] = useState([]);
  //
  const logInHandler = (value) => {
    setLogInState((prevState) => value);
  };
  const userIdHandler = (value) => {
    setUserId((prevState) => value);
  };
  const addNewPost = (newPost) => {
    setNewPosts((prevState) => [newPost, ...prevState]);
  };
  const deletePost = (postId) => {
    setNewPosts((prevState) => {
      return prevState.filter((post) => post.id !== postId);
    });
  };
  //
  const values = {
    loginState: loginState,
    logInHandler: logInHandler,
    userId: userId,
    userIdHandler: userIdHandler,
    newPosts: newPosts,
    addNewPost: addNewPost,
    deletePost: deletePost,
  };
  return (
    <appContext.Provider value={values}>{props.children}</appContext.Provider>
  );
};

export { appContext, AppContextProvider };
