import { Action } from "redux";

export enum LoginActionTypes {
  SET_LOGIN = "@@USER/SET_LOGIN",
}

export interface LoginState {
  isLoggedIn: boolean;
}

export interface loginSuccessActionType extends Action {
  type: LoginActionTypes.SET_LOGIN;
  payload: true;
}

export interface loginFailedActionType extends Action {
  type: LoginActionTypes.SET_LOGIN;
  payload: false;
}

export type LoginActions = loginSuccessActionType | loginFailedActionType;
