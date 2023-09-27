import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteDialog = ({
  postId,
  openState,
  onCloseDeleteAlert,
  onDeletePost,
}) => {
  const [open, setOpen] = useState(openState);

  const handleClose = () => {
    setOpen(false);
    onCloseDeleteAlert();
  };

  const deletePostHandler = () => {
    // console.log("delete Post");
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json, "Delete Post Success"));
    onDeletePost(postId);
    setOpen(false);
    onCloseDeleteAlert();
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete Post Alert ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are You sure to delete This Post from All Posts Page ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={deletePostHandler}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
