// import React from 'react'
import { Container, Typography } from "@mui/material";
const Home = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 10,
        }}
      >
        <Typography component="h3" variant="h1">
          Hom Page
        </Typography>

        <Typography
          component="h3"
          variant="h3"
          sx={{ color: `var(--bg-color)`, pt: 5 }}
        >
          Digitinary-Challenge
        </Typography>
      </Container>
    </>
  );
};

export default Home;
