import { ActionCreator } from "redux";

import { ThemeActions, ThemeActionsType } from "./types";

export const setDarkTheme: ActionCreator<ThemeActions> = (
  payload: boolean
) => ({
  type: ThemeActionsType.TOGGLE_DARK_THEME,
  payload,
});
