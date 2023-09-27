// import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const UserLayOut = () => {
  return (
    <>
      <Header />

      <Box component="main" sx={{ minHeight: `calc(100vh - 130px)` }}>
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default UserLayOut;
