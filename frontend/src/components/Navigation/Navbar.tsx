import { Box, Button } from "@mui/material";
import BrandIcon from "./BrandIcon";
import CustomLink from "./CustomLink";

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
        <CustomLink href="/login">Log In</CustomLink>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            color: "primary.main",
            backgroundColor: "secondary.main",
            ml: 3,
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
