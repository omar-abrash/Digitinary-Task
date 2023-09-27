// import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Error = () => {
  return (
    <>
      <Header />

      <Box component="main" sx={{ minHeight: `calc(100vh - 130px)` }}>
        <Container sx={{ color: "red", fontSize: "25px" }}>
          Error Page
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Error;
