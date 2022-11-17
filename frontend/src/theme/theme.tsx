import { Roboto } from "@next/font/google";
import { red } from "@mui/material/colors";
import { THEME_MODE } from "../constants/enums";
import { PaletteMode } from "@mui/material";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// const getThemeByName = (name) => {
//   return {something: 0}
// }

const getPalette = (mode: PaletteMode = THEME_MODE.LIGHT as PaletteMode) => ({
  palette: {
    mode,
    // ...getThemeByName('fill_name'),
    ...(mode === THEME_MODE.LIGHT
      ? {
          background: {
            default: "#fff",
          },
          primary: {
            main: "#556cd6",
          },
          secondary: {
            main: "#19857b",
          },
          error: {
            main: red.A400,
          },
        }
      : {
          background: {
            default: "#000",
          },
          primary: {
            main: "#556cd6",
          },
          secondary: {
            main: "#19857b",
          },
          error: {
            main: red.A400,
          },
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default getPalette;
