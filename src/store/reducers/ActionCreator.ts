import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../types/IUser";
import { AuthResponse } from "../../types/response/AuthResponse";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

interface loginData {
    email: string,
    password: string
}

export const login = createAsyncThunk(
  "user/login",
  async (userData: loginData, thunkAPI) => {
    try {
      const response = await axios.post<AuthResponse>("/login", userData);
      return response.data;
    } catch (err) {
      thunkAPI.rejectWithValue("Не удалось войти!");
    }
  }
);
