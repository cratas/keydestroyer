import { Box, Link, Button } from "@mui/material";
import React from "react";
import logo from "../assets/logo-black-2.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        py: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <img width={300} src={logo.src} alt="main-logo" />
      </Box>

      <Box>
        <Link href="#" underline="none" fontWeight="bold" color="black" mr={3}>
          Log In
        </Link>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
          }}
          size="medium"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
