import React from "react";
import logo from "../assets/logo-black-2.png";
import { Box } from "@mui/material";

const BrandIcon = () => {
  return (
    <Box>
      <img width={300} src={logo.src} alt="main-logo" />
    </Box>
  );
};

export default BrandIcon;
