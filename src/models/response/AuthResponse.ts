import { IUser } from "../IUser";

export interface AuthResponse {
    accessToken: String,
    refreshToken: String,
    user: IUser
}