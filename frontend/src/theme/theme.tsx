import { Roboto } from "@next/font/google";
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
          dark_100: {
            main: "red",
          },
          light_100: {
            main: "#19857b",
          },
        }
      : {
          background: {
            default: "#000",
          },
          dark_100: {
            main: "red",
          },
          light_100: {
            main: "#19857b",
          },
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default getPalette;
