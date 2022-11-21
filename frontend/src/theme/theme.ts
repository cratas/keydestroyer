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
          primary: {
            main: "#fff",
          },
          secondary: {
            main: "#000",
          },
          background: {
            default: "#fff",
          },
        }
      : {
          primary: {
            main: "#000",
          },
          secondary: {
            main: "#fff",
          },
          background: {
            default: "#000",
          },
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const { palette } = getPalette();

const customTheme = {
  components: {
    MuButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: palette.primary.main,
          backgroundColor: palette.secondary.main,
        },
      },
    },
  },
};

export { getPalette };

export default customTheme;
