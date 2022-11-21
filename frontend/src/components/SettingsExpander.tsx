import { Box } from "@mui/system";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useDispatch } from "react-redux";
import { changeCurrentTheme } from "../redux/currentThemeSlice";

const SettingsExpander = ({ changeTheme }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        top: "50%",
        right: "0",
        cursor: "pointer",
        transform: "translateY(-50%)",
        backgroundColor: "secondary.main",
        p: 0.9,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}
      onClick={() => {
        changeTheme();
        dispatch(changeCurrentTheme())
      }}
    >
      <Brightness4Icon sx={{ color: "primary.main" }} />
    </Box>
  );
};

export default SettingsExpander;
