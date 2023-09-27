// import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DeleteDialog from "./DeleteDialog";
import AddEditPostDialog from "./AddEditPostDialog";

const SinglePost = ({ post, onDeletePost, onEditPost }) => {
  const [deleteState, setDeleteState] = useState(false);
  const [editState, setEditState] = useState(false);
  //
  return (
    <>
      {deleteState && (
        <DeleteDialog
          openState={deleteState}
          onCloseDeleteAlert={() => setDeleteState(false)}
          onDeletePost={onDeletePost}
          postId={post.id}
        />
      )}

      {editState && (
        <AddEditPostDialog
          addEditOpenState={editState}
          afterAddPost={() => setEditState(false)}
          resetAddEditPostState={() => setEditState(false)}
          onEditPost={onEditPost}
          from="edit"
          post={post}
        />
      )}

      <Card
        sx={{
          height: "300px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {post.title}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex" }}>
          <CardActions>
            <Button size="small" onClick={() => setEditState(true)}>
              Edit
            </Button>
          </CardActions>

          <CardActions>
            <Button size="small" onClick={() => setDeleteState(true)}>
              DELETE
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default SinglePost;
