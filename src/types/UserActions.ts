import { IUser } from "./IUser";

export enum UserActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REGISTRATION = "REGISTRATION",
  FETCH_USERS = "FETCH_USERS",
}

interface LoginAction {
  type: UserActionTypes.LOGIN;
  payload: IUser
}

interface LogoutAction {
  type: UserActionTypes.LOGOUT;
  payload?: any;
}

interface RegistrationAction {
  type: UserActionTypes.REGISTRATION;
  payload?: any;
}

export type UserAction = LoginAction | LogoutAction | RegistrationAction;
