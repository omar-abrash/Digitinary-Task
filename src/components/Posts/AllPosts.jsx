// import React from "react";
import { useState, useEffect, useContext } from "react";
import { Container, Button, Box, Grid, Skeleton } from "@mui/material";
import SinglePost from "./SinglePost";
import AddEditPostDialog from "./AddEditPostDialog";
import { appContext } from "../../context/context-app";

const AllPosts = () => {
  // define context
  const appCtx = useContext(appContext);
  const newPosts = appCtx.newPosts;
  // define states
  const [userPosts, setUserPosts] = useState([...newPosts]);
  const [loading, setLoading] = useState(false);
  const [addNewPostState, setAddNewPostState] = useState(false);

  const userId = appCtx.userId;

  const addPostHandler = (newPost) => {
    appCtx.addNewPost(newPost);
  };

  const editPostHandler = (editPost) => {
    appCtx.editPost(editPost);
  };

  const deletePostHandler = (postId) => {
    appCtx.deletePost(postId);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => {
        setUserPosts([...newPosts, ...json]);
        setLoading(false);
      });
  }, [userId, newPosts]);
  //
  return (
    <>
      {addNewPostState && (
        <AddEditPostDialog
          from="add"
          addEditOpenState={addNewPostState}
          resetAddEditPostState={() => setAddNewPostState(false)}
          onAddNewPost={addPostHandler}
        />
      )}

      <Container>
        <Box component="div" sx={{ m: "30px" }}>
          <Button variant="contained" onClick={() => setAddNewPostState(true)}>
            Add New Post
          </Button>
        </Box>

        {loading && (
          <Box sx={{ width: 350 }}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Box>
        )}

        <Box component="div" sx={{ mt: "20px", mb: "20px" }}>
          {userPosts?.length > 0 && (
            <Grid container spacing={2} justifyContent="flex-start">
              {userPosts.map((post) => (
                <Grid
                  item
                  key={post.id + Math.random()}
                  sx={{ width: `calc(100% / 3)` }}
                >
                  <SinglePost
                    post={post}
                    onDeletePost={deletePostHandler}
                    onEditPost={editPostHandler}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
};

export default AllPosts;
