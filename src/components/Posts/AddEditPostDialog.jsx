// import * as React from "react";
import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { appContext } from "../../context/context-app";

const AddEditPostDialog = ({
  from,
  post,
  addEditOpenState,
  resetAddEditPostState,
  onAddNewPost,
}) => {
  // define states
  const [open, setOpen] = useState(addEditOpenState);
  const [formState, setFormState] = useState({
    formSubmit: false,
    postTitle: "",
    postTitleValid: false,
    postBody: "",
    postBodyValid: false,
  });
  // decunstruce formState
  const { formSubmit, postTitle, postTitleValid, postBody, postBodyValid } =
    formState;
  // context value
  const userId = useContext(appContext).userId;
  // inputs change Handling Functions
  const postTitleChangeHandler = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        postTitle: event.target.value,
        postTitleValid: event.target.value.trim().length > 0,
      };
    });
  };

  const postBodyChangeHandler = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        postBody: event.target.value,
        postBodyValid: event.target.value.trim().length > 0,
      };
    });
  };
  //
  const addEditNewPostHandler = () => {
    setFormState((prevState) => {
      return { ...prevState, formSubmit: true };
    });
    // edit case should set new values on the state
    //

    if (from === "add") {
      // add new post Case
      // console.log("Add post success!");
      if (postTitleValid && postBodyValid) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
            userId: userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => onAddNewPost(json));
        setOpen(false);
        resetAddEditPostState();
      }
    } else {
      // edit post Case
      // console.log("Edit post success!");
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: post.id,
          title: postTitle,
          body: postBody,
          userId: userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      setOpen(false);
      resetAddEditPostState();
    }
  };

  const handleClose = () => {
    setOpen(false);
    resetAddEditPostState();
  };
  //
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Psot !</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit Post Tilte and Body before Press Edit Post Button, You Can
            Cancle this Action When Press (CANCEL) Button.
          </DialogContentText>

          <TextField
            id="post-title"
            type="text"
            label="Post Title"
            defaultValue={from === "edit" ? post.title : postTitle}
            onChange={postTitleChangeHandler}
            error={formSubmit && !postTitleValid}
            placeholder="Post Title"
            sx={{ m: "20px", width: "80%" }}
          />

          <TextField
            id="post-body"
            type="text"
            label="Post Body"
            defaultValue={from === "edit" ? post.body : postBody}
            onChange={postBodyChangeHandler}
            error={formSubmit && !postBodyValid}
            placeholder="Post Body"
            multiline
            sx={{ m: "20px", width: "80%" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addEditNewPostHandler}>
            {from === "edit" ? "Edit Post" : "Add New Post"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddEditPostDialog;
