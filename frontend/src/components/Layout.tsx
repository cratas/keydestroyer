import { Divider } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import logo from "../assets/logo-white.png";

const Layout = ({ children }) => {
  return (
    <Container>
      <Box sx={{ textAlign: "left", pt: "1rem", pb: "0.5rem" }}>
        <img width={250} src={logo.src} alt="main-logo"></img>
      </Box>
      <Divider sx={{backgroundColor: 'black', height: '0.2rem'}}/>

      {children}
    </Container>
  );
};

export default Layout;
