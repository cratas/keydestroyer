import { Box } from "@mui/system";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

// TODO: CSS set globally
const SettingsExpander = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        top: "50%",
        right: "0",
        cursor: "pointer",
        transform: "translateY(-50%)",
        backgroundColor: "black",
        p: 0.9,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}
    >
      <SettingsIcon
        sx={{
          color: "white",
          fontSize: 30,
          animation: "spin 17s linear infinite",
          "@keyframes spin": {
            "0%": {
              transform: "rotate(360deg)",
            },
            "100%": {
              transform: "rotate(0deg)",
            },
          },
        }}
      />
    </Box>
  );
};

export default SettingsExpander;
