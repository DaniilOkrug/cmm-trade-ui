import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../service/AuthService";
import { IUser } from "../../types/IUser";
import { AuthResponse } from "../../types/response/AuthResponse";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

interface loginData {
  email: string;
  password: string;
}

const URL = "http://localhost:5000/api";

export const login = createAsyncThunk(
  "user/login",
  async (userData: loginData, thunkAPI) => {
    try {
      const response = await AuthService.login(
        userData.email,
        userData.password
      );

      localStorage.setItem("token", response.data.accessToken);
      return response.data.user;
    } catch (err) {
      thunkAPI.rejectWithValue("Не удалось войти!");
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const response = await AuthService.logout();
    localStorage.removeItem('token')

    return response.data;
  } catch (err) {
    thunkAPI.rejectWithValue("Не удалось выйти!");
  }
});

export const registration = createAsyncThunk(   
  "user/registration",
  async (userData: loginData, thunkAPI) => {
    try {
      const response = await AuthService.registration(
        userData.email,
        userData.password
      );
      localStorage.setItem("token", response.data.accessToken);
      console.log(response.data);

      return response.data.user;
    } catch (err) {
      thunkAPI.rejectWithValue("Не удалось зарегистрироваться!");
    }
  }
);

export const checkAuth = createAsyncThunk("user/refresh", async (_, thunkAPI) => {
  try {
    const response = await axios.get<AuthResponse>(`${URL}/refresh`, {
      withCredentials: true,
    });
    console.log("Check auth response: " + response.data);
    localStorage.setItem('token', response.data.accessToken);

    return response.data.user;
  } catch (err) {
    thunkAPI.rejectWithValue("Ошибка авторизации!");
  }
});
