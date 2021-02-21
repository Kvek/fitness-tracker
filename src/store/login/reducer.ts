import { Reducer } from "redux";

import { LoginActionTypes, LoginState } from "./types";

export const initialState: LoginState = {
  isLoggedIn: false,
};

export const LoginReducer: Reducer<LoginState> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case LoginActionTypes.SET_LOGIN:
      return { ...state, isLoggedIn: payload };

    default:
      return state;
  }
};
