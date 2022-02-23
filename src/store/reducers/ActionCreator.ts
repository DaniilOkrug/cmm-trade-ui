import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../service/AuthService";
import { AuthResponse } from "../../types/response/AuthResponse";
import { URL } from "../../utils/config";

interface loginData {
  email: string;
  password: string;
}

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
      return thunkAPI.rejectWithValue("Не удалось войти!");
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const response = await AuthService.logout();
    localStorage.removeItem('token')

    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue("Не удалось выйти!");
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
      return thunkAPI.rejectWithValue("Не удалось зарегистрироваться!");
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
  } catch (err: any) {
    console.log(err);
    
    return thunkAPI.rejectWithValue("Ошибка авторизации!");
  }
});
