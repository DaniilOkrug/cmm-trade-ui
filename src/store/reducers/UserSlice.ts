import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApi } from "../../types/IApi";
import { IUser } from "../../types/IUser";
import { ApiResponse } from "../../types/response/ApiResponse";
import {
  addApi,
  checkApi,
  checkAuth,
  deleteApi,
  getApiList,
  login,
  logout,
  registration,
} from "./ActionCreator";

interface UserState {
  user: IUser;
  apiList: IApi[];
  isLoading: boolean;
  isAuth: boolean;
  error: string;
}

const initialState: UserState = {
  user: {} as IUser,
  apiList: [],
  isLoading: false,
  isAuth: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    //Login states
    [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isAuth = action.payload ? true : false;
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
    },
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //Authentification states
    [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = action.payload ? true : false;
      state.isLoading = false;
      state.error = "";
    },
    [checkAuth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkAuth.rejected.type]: (state, action: PayloadAction<any>) => {
      state.user = {} as IUser;
      state.isAuth = false;
      state.isLoading = false;
    },
    //Logout states
    [logout.fulfilled.type]: (state) => {
      state.user = {} as IUser;
      state.isAuth = false;
      state.isLoading = false;
      state.error = "";
    },
    [logout.pending.type]: (state) => {
      state.isLoading = true;
    },
    [logout.rejected.type]: (state) => {
      state.user = {} as IUser;
      state.isAuth = false;
      state.isLoading = false;
    },
    //registration states
    [registration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = action.payload ? true : false;
      state.isLoading = false;
      state.error = "";
    },
    [registration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registration.rejected.type]: (state) => {
      state.user = {} as IUser;
      state.isAuth = false;
      state.isLoading = false;
    },
    //addApi states
    [addApi.fulfilled.type]: (state, action: PayloadAction<IApi[]>) => {
      state.apiList = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [addApi.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //getApiList states
    [getApiList.fulfilled.type]: (state, action: PayloadAction<IApi[]>) => {
      state.apiList = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [getApiList.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getApiList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.apiList = [];
      state.isLoading = false;
    },
    //deleteApi states
    [deleteApi.fulfilled.type]: (state, action: PayloadAction<IApi[]>) => {
      state.apiList = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [deleteApi.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //checkApi states
    [checkApi.fulfilled.type]: (state, action: PayloadAction<ApiResponse>) => {
      state.isLoading = false;
      state.error = "";
    },
    [checkApi.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkApi.rejected.type]: (state, action: PayloadAction<IApi[]>) => {
      state.apiList = action.payload;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
