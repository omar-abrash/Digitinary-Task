// import React from "react";
import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import { appContext } from "../../context/context-app";

import classes from "./Header.module.css";

const Header = () => {
  const appCtx = useContext(appContext);
  const logInState = appCtx.loginState;
  const navigate = useNavigate();

  return (
    <Box
      component="header"
      sx={{ height: "80px", backgroundColor: `var(--bg-color)` }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="h1">
          <Link to="/">Digitinary-Task</Link>
        </Box>

        <Box component="nav">
          {!logInState && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? `${classes.login} ${classes.active}` : classes.login
              }
            >
              Log In
            </NavLink>
          )}

          {logInState && (
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.login} ${classes.active}`
                    : classes.login
                }
              >
                All Posts
              </NavLink>

              <Button
                variant="contained"
                type="submit"
                sx={{
                  height: "45px",
                  marginLeft: "20px",
                  background: "#91f4ff",
                  color: "black",
                  fontWeight: 600,
                }}
                onClick={() => {
                  appCtx.logInHandler(false);
                  navigate("/");
                }}
              >
                Log Out
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
