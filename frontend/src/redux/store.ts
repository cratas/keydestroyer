import { configureStore } from "@reduxjs/toolkit";
import currentThemeSlice, {
  name as currentThemeName,
} from "./currentThemeSlice";

export const createStore = () => {
  configureStore({
    reducer: { [currentThemeName]: currentThemeSlice },
  });
};

const store: any = createStore();

export default store;
