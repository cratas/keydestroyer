import React, { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import { THEME_MODE } from "../constants/enums";
import getPalette from "../theme/theme";
import { PaletteMode } from "@mui/material";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [selectedTheme, setSelectedTheme] = useState<PaletteMode>(THEME_MODE.LIGHT as PaletteMode);
  const theme = useMemo(() => createTheme(getPalette(selectedTheme)), [selectedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} setSelectedTheme={setSelectedTheme} />
    </ThemeProvider>
  );
};

export default MyApp;
