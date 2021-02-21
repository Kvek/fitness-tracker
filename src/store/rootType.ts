import { LoginState } from "./login/types";
import { ThemeState } from "./theme/types";

export interface AppState {
  login: LoginState;
  theme: ThemeState;
}
