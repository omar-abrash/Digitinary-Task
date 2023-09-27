// import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { appContext } from "../../context/context-app";

const LogInForm = () => {
  // define states
  const [userFound, setUserFound] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    formSubmit: false,
    email: "",
    emailValid: false,
    userName: "",
    userNameValid: false,
  });
  // define navigate router method
  const navigate = useNavigate();
  // define context
  const appCtx = useContext(appContext);
  // deconstruct formState
  const { formSubmit, email, emailValid, userName, userNameValid } = formState;
  // email validation regex
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //
  const emailChangeHandler = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
        emailValid: emailPattern.test(event.target.value.trim()),
      };
    });
  };
  const userNameChangeHandler = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        userName: event.target.value,
        userNameValid: event.target.value.trim().length > 0,
      };
    });
  };
  // submit Form
  const logInFormSubmitHandler = async (event) => {
    event.preventDefault();
    setFormState((prevState) => {
      return { ...prevState, formSubmit: true };
    });

    if (emailValid && userNameValid) {
      setLoading(true);
      const usersUrl = "https://jsonplaceholder.typicode.com/users";
      const usersResponse = await fetch(usersUrl);
      const usersData = await usersResponse.json();
      setLoading(false);
      // check if the user in users
      const findUser = usersData.find(
        (user) => user.email === email && user.username === userName
      );
      // if not user
      if (!findUser) {
        setUserFound(false);
        return;
      }
      // if user
      setUserFound(null);
      appCtx.logInHandler(true);
      appCtx.userIdHandler(findUser.id);
      navigate("/posts");
    }
  };
  //
  return (
    <Container>
      <Box
        onSubmit={logInFormSubmitHandler}
        component="form"
        sx={{
          width: "100%",
          maxWidth: "500px",
          minWidth: "300px",
          margin: "0px auto",
          padding: "50px 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="div" sx={{ height: "30px" }}>
          {userFound === false && (
            <Typography variant="body2" component="p" style={{ color: "red" }}>
              You are Not User in System Yet !
            </Typography>
          )}
        </Box>

        <TextField
          id="user-email"
          type="email"
          label="Email"
          value={email}
          onChange={emailChangeHandler}
          error={!emailValid && formSubmit}
          placeholder="Email Address"
          sx={{
            width: "80%",
            marginBottom: "20px",
          }}
        />

        <TextField
          id="user-name"
          type="text"
          label="User Name"
          value={userName}
          onChange={userNameChangeHandler}
          error={!userNameValid && formSubmit}
          placeholder="User Name"
          sx={{
            width: "80%",
            marginBottom: "20px",
          }}
        />

        <Button
          variant="contained"
          type="submit"
          disabled={loading}
          sx={{ width: "80%", height: "50px" }}
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default LogInForm;
