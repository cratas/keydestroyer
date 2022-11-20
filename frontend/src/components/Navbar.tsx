import { Box, Link, Button } from "@mui/material";
import React from "react";
import BrandIcon from "./BrandIcon";

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
      <BrandIcon />

      <Box>
        <Link
          href="#"
          underline="none"
          fontWeight="bold"
          sx={{ color: "secondary.main" }}
          mr={3}
        >
          Log In
        </Link>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            color: "primary.main",
            backgroundColor: "secondary.main",
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
