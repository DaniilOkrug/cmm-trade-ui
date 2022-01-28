import { IUser } from "./IUser";

export interface UserState {
  user: IUser;
  users: any[];
  isAuth: boolean;
  isLoading: boolean;
}