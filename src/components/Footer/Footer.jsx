// import React from "react";
import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        height: "50px",
        backgroundColor: `var(--bg-color)`,
      }}
    >
      <Container>
        <Box component="div" sx={{ pt: "10px", fontWeight: 500 }}>
          digitinary ReactJs Code Challenge - Omar Abrash - Frontend Developer (
          ReactJS )
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
