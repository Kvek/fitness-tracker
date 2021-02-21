import { Action } from "redux";

export enum ThemeActionsType {
  TOGGLE_DARK_THEME = "@@USER/TOGGLE_DARK_THEME",
}

export interface ThemeState {
  isDarkTheme: boolean;
}

export interface setDarkTheme extends Action {
  type: ThemeActionsType.TOGGLE_DARK_THEME;
  payload: boolean;
}

export type ThemeActions = setDarkTheme;
