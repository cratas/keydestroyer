import { THEME_MODE } from "../constants/enums";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CurrentThemeState {
  currentTheme: string;
}

const initialState: CurrentThemeState = {
  currentTheme: THEME_MODE.LIGHT,
};

export const name = "currentTheme";

export const currentThemeReducer = createSlice({
  name,
  initialState,
  reducers: {
    changeCurrentTheme: (state) => {
      state.currentTheme =
        state.currentTheme === THEME_MODE.LIGHT
          ? THEME_MODE.DARK
          : THEME_MODE.LIGHT;
    },
  },
});

export const { changeCurrentTheme } = currentThemeReducer.actions;

export const selectCurrentTheme = (state: RootState) => state.currentTheme.currentTheme;

export default currentThemeReducer.reducer;
