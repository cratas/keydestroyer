import { Divider } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import logo from "../assets/logo-black.png";

const Layout = ({ children }) => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", pt: "1.8rem", pb: "1rem" }}>
        <img width={220} src={logo.src} alt="main-logo"></img>
      </Box>
      <Divider sx={{backgroundColor: 'black', height: '0.2rem'}}/>

      {children}
    </Container>
  );
};

export default Layout;
