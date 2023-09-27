// import React from "react";
import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ height: "50px", backgroundColor: `var(--bg-color)` }}
    >
      <Container>
        <Box component="div">digitinary-task , Prepared by Omar Abrash</Box>
      </Container>
    </Box>
  );
};

export default Footer;
