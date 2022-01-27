import { IUser } from "../models/IUser";

type UserAction = {
    type: string,
    user: IUser,
    isAuth: boolean;
    isLoading: boolean,
}