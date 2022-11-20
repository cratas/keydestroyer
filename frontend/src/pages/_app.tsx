import React, { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import { THEME_MODE } from "../constants/enums";
import { CssBaseline, PaletteMode } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SettingsExpander from "../components/SettingsExpander";
import { deepmerge } from "@mui/utils";
import customTheme, { getPalette } from "../theme/theme";
import store from "../redux/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [selectedTheme, setSelectedTheme] = useState<PaletteMode>(
    THEME_MODE.LIGHT as PaletteMode
  );

  const theme = useMemo(
    () => createTheme(deepmerge(getPalette(selectedTheme), customTheme)),
    [selectedTheme]
  );

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default MyApp;
