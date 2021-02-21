import { combineReducers, Reducer } from "redux";

import { LoginReducer } from "./login/reducer";
import { AppState } from "./rootType";
import { ThemeReducer } from "./theme/reducer";

export const rootReducer: Reducer<AppState> = combineReducers({
  login: LoginReducer,
  theme: ThemeReducer,
});
