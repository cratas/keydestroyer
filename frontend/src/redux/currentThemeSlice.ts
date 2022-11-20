import { THEME_MODE } from "../constants/enums";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: THEME_MODE.LIGHT,
};

export const name = "currentTheme";

export const currentThemeReducer = createSlice({
  name,
  initialState,
  reducers: {
    setCurrentTheme: (state, { payload }) => {
      const { currentTheme } = payload;
      state.currentTheme = currentTheme;
    },
  },
});

export const { setCurrentTheme } = currentThemeReducer.actions;

export default currentThemeReducer.reducer;
