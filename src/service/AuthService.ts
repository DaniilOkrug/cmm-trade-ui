import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/authResponse";

export default class AuthService {
  static async login(
    email: String,
    password: String
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", { email, password });
  }

  static async registration(
    email: String,
    password: String
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", { email, password });
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/logout");
  }
}