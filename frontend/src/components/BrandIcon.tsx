import React from "react";
import { Box } from "@mui/material";
import lightLogo from "../assets/logo-white.png";
import darkLogo from "../assets/logo-black-2.png";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "../redux/currentThemeSlice";
import { THEME_MODE } from "../constants/enums";

const BrandIcon = () => {
  const currentTheme: string = useSelector(selectCurrentTheme);

  return (
    <Box>
      <img
        width={300}
        src={currentTheme === THEME_MODE.LIGHT ? darkLogo.src : lightLogo.src}
        alt="main-logo"
      />
    </Box>
  );
};

export default BrandIcon;
