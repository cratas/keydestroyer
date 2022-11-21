import React, { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SettingsExpander from "../components/SettingsExpander";
import { deepmerge } from "@mui/utils";
import customTheme, { getPalette } from "../theme/theme";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { THEME_MODE } from "../constants/enums";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [currentTheme, setCurrentTheme] = useState<string>(THEME_MODE.LIGHT);

  const theme = useMemo(
    () =>
      createTheme(
        deepmerge(getPalette(currentTheme as "light" | "dark"), customTheme)
      ),
    [currentTheme]
  );

  const handleChangeTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Key Destroyer</title>
      </Helmet>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <SettingsExpander changeTheme={handleChangeTheme} />
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  );
};

export default MyApp;
