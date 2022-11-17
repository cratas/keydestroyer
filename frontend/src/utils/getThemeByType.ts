import lightTheme from "../theme/light-theme";
import darkTheme from "../theme/light-theme";
import { THEMES } from "../constants/enums";

export const getThemeByType = (themeType: string) => {
  switch (themeType) {
    case THEMES.DARK_THEME:
      return darkTheme;
    case THEMES.LIGHT_THEME:
      return lightTheme;
  }
};
