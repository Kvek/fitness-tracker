import { Reducer } from "redux";

import { ThemeActionsType, ThemeState } from "./types";

export const initialState: ThemeState = {
  isDarkTheme: true,
};

export const ThemeReducer: Reducer<ThemeState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ThemeActionsType.TOGGLE_DARK_THEME:
      return { ...state, isDarkTheme: payload };

    default:
      return state;
  }
};
