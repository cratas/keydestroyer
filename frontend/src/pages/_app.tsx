import React, { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import { THEME_MODE } from "../constants/enums";
import getPalette from "../theme/theme";
import { CssBaseline, PaletteMode } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SettingsExpander from "../components/SettingsExpander";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [selectedTheme, setSelectedTheme] = useState<PaletteMode>(
    THEME_MODE.LIGHT as PaletteMode
  );

  const theme = useMemo(
    () => createTheme(getPalette(selectedTheme)),
    [selectedTheme]
  );

  return (
    <HelmetProvider>
      <Helmet>
        <title>Key Destroyer</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} setSelectedTheme={setSelectedTheme} />
        <SettingsExpander />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default MyApp;
