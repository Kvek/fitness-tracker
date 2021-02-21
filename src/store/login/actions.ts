import { ActionCreator } from "redux";

import { LoginActions, LoginActionTypes } from "./types";

export const setLoginSuccess: ActionCreator<LoginActions> = () => ({
  type: LoginActionTypes.SET_LOGIN,
  payload: true,
});

export const setLoginFailure: ActionCreator<LoginActions> = () => ({
  type: LoginActionTypes.SET_LOGIN,
  payload: false,
});
