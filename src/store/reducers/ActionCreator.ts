import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../service/AuthService";
import UserService from "../../service/UserService";
import { IBot } from "../../types/iBot";
import { AuthResponse } from "../../types/response/AuthResponse";
import { URL } from "../../utils/config";

interface loginData {
  email: string;
  password: string;
}

interface apiData {
  name: string;
  exchange: string;
  key: string;
  secret: string;
}

interface botData {
  name: string;
  key: string;
  deposit: number;
}

export const login = createAsyncThunk(
  "user/login",
  async (userData: loginData, thunkAPI) => {
    try {
      const response = await AuthService.login(
        userData.email,
        userData.password
      );

      console.log(response.data);
      

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
    localStorage.removeItem("token");

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
    } catch (err: any) {
      console.error(err.response.data.message);
      return thunkAPI.rejectWithValue("Не удалось зарегистрироваться!");
    }
  }
);

export const checkAuth = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<AuthResponse>(`${URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.accessToken);

      return response.data.user;
    } catch (err: any) {
      console.error(err.response.data.message);
      return thunkAPI.rejectWithValue("Ошибка авторизации!");
    }
  }
);

export const getConfirmLetter = createAsyncThunk(
  "user/getConfirmLetter",
  async (_, thunkAPI) => {
    try {
      const userData = await UserService.getConfirmLetter();
      
      return userData.data;
    } catch (err: any) {
      console.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const addApi = createAsyncThunk(
  "user/addApi",
  async (userData: apiData, thunkAPI) => {
    try {
      const response = await UserService.addAPI(
        userData.name,
        userData.exchange,
        userData.key,
        userData.secret
      );

      console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteApi = createAsyncThunk(
  "user/deleteApi",
  async (key: string, thunkAPI) => {
    try {
      const response = await UserService.deleteApi(key);

      console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const checkApi = createAsyncThunk(
  "user/checkApi",
  async (key: string, thunkAPI) => {
    try {
      const response = await UserService.checkApi(key);

      console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.error(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getApiList = createAsyncThunk(
  "user/getApiList",
  async (userId: string, thunkAPI) => {
    try {
      const response = await UserService.getApiList(userId);

      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue("Ошибка получения API!");
    }
  }
);

export const getBots = createAsyncThunk("user/getBots", async (_, thunkAPI) => {
  try {
    const response = await UserService.getBots();

    return response.data;
  } catch (err: any) {
    console.log(err);

    return thunkAPI.rejectWithValue("Ошибка получения пользовательских роботов!");
  }
});

export const createBot = createAsyncThunk(
  "user/createBot",
  async (data: botData, thunkAPI) => {
    try {
      const response = await UserService.createBot(
        data.name,
        data.key,
        data.deposit
      );

      console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.log(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteBot = createAsyncThunk(
  "user/deleteBot",
  async (name: string, thunkAPI) => {
    try {
      const response = await UserService.deleteBot(name);

      console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue(
        "Ошибка получения пользователих роботов!"
      );
    }
  }
);

export const startBot = createAsyncThunk(
  "user/startBot",
  async (pair: string, thunkAPI) => {
    try {
      const response = await UserService.startBot(pair);

      console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue(
        "Ошибка получения пользователих роботов!"
      );
    }
  }
);

export const stopBot = createAsyncThunk(
  "user/stopBot",
  async (name: string, thunkAPI) => {
    try {
      const response = await UserService.stopBot(name);

      console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue(
        "Ошибка получения пользователих роботов!"
      );
    }
  }
);

export const stopAllBots = createAsyncThunk(
  "user/stopAllBot",
  async (_, thunkAPI) => {
    try {
      const response = await UserService.stopAllBots();

      console.log(response.data);

      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue(
        "Ошибка получения пользователих роботов!"
      );
    }
  }
);

export const getBotSettings = createAsyncThunk(
  "bot/getBotSettings",
  async (_, thunkAPI) => {
    try {
      const response = await UserService.getBotSettings();
      console.log(response);
      
      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue("Ошибка получения настроек робота!");
    }
  }
);

export const sendBotSettings = createAsyncThunk(
  "bot/sendBotSettings",
  async (settings: IBot, thunkAPI) => {
    try {
      const response = await UserService.sendBotSettings(settings);

      console.log(response);

      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue("Ошибка отправки настроек робота!");
    }
  }
);

export const getBlackList = createAsyncThunk(
  "bot/getBlackList",
  async (_, thunkAPI) => {
    try {
      const response = await UserService.getBlackList();

      console.log(response);

      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue("Ошибка получения черного списка!");
    }
  }
);


export const setBlackList = createAsyncThunk(
  "bot/setBlackList",
  async (blacklist: string[], thunkAPI) => {
    try {
      const response = await UserService.setBlackList(blacklist);

      console.log(response);

      return response.data;
    } catch (err: any) {
      console.log(err);

      return thunkAPI.rejectWithValue("Ошибка отправления черного списка!");
    }
  }
);