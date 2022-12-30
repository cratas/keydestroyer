import React from "react";
import { Box } from "@mui/material";
import lightLogo from "../../assets/logo-white.png";
import darkLogo from "../../assets/logo-black-2.png";
import { useSelector } from "react-redux";
import { selectCurrentTheme } from "../../redux/currentThemeSlice";
import { THEME_MODE } from "../../constants/enums";
import { NextRouter, useRouter } from "next/router";

const BrandIcon = () => {
  const currentTheme: string = useSelector(selectCurrentTheme);
  const router: NextRouter = useRouter();

  return (
    <Box onClick={() => router.push("/")} sx={{ cursor: "pointer" }}>
      <img
        width={300}
        src={currentTheme === THEME_MODE.LIGHT ? darkLogo.src : lightLogo.src}
        alt="main-logo"
      />
    </Box>
  );
};

export default BrandIcon;
