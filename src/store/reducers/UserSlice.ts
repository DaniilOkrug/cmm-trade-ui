import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApi } from "../../types/IApi";
import { IUser } from "../../types/IUser";
import { ApiResponse } from "../../types/response/ApiResponse";
import { RejectedWithValueAction } from "../../types/response/RejectWithValue";
import {
  addApi,
  checkApi,
  checkAuth,
  deleteApi,
  getConfirmLetter,
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
  isApiChecked: boolean;
  isUserError: boolean;
  userError: string;
}

const initialState: UserState = {
  user: {} as IUser,
  apiList: [],
  isLoading: false,
  isAuth: false,
  isApiChecked: false,
  isUserError: false,
  userError: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setApiChecked(state, action: PayloadAction<boolean>) {
      state.isApiChecked = action.payload;
    },
    setErrotStatus(state, action: PayloadAction<boolean>) {
      state.isUserError = action.payload;
      state.isApiChecked = action.payload;
    },
  },
  extraReducers: {
    //Login states
    [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isAuth = action.payload ? true : false;
      state.isLoading = false;
      state.userError = "";
      state.user = action.payload;
    },
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.userError = action.payload;
    },
    //Authentification states
    [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = action.payload ? true : false;
      state.isLoading = false;
      state.userError = "";
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
      state.userError = "";
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
      state.userError = "";
    },
    [registration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registration.rejected.type]: (state) => {
      state.user = {} as IUser;
      state.isAuth = false;
      state.isLoading = false;
    },
    //email confirmation
    [getConfirmLetter.fulfilled.type]: (
      state,
      action: PayloadAction<IUser>
    ) => {
      state.user = action.payload;
      state.isAuth = action.payload ? true : false;
      state.userError = "";
      state.isLoading = false;
    },
    [getConfirmLetter.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getConfirmLetter.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.userError = action.payload;
      state.isUserError = true;
      state.isLoading = false;
    },
    //addApi states
    [addApi.fulfilled.type]: (state, action: PayloadAction<IApi[]>) => {
      state.apiList = action.payload;
      state.isLoading = false;
      state.userError = "";
    },
    [addApi.pending.type]: (state) => {
      state.isLoading = true;
    },
    [addApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.userError = action.payload;
      state.isLoading = false;
    },
    //getApiList states
    [getApiList.fulfilled.type]: (state, action: PayloadAction<IApi[]>) => {
      console.log(action.payload);

      state.apiList = action.payload;
      state.userError = "";
      state.isLoading = false;
    },
    [getApiList.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getApiList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.userError = action.payload;
      state.apiList = [];
      state.isLoading = false;
    },
    //deleteApi states
    [deleteApi.fulfilled.type]: (state, action: PayloadAction<IApi[]>) => {
      state.apiList = action.payload;
      state.isLoading = false;
      state.userError = "";
    },
    [deleteApi.pending.type]: (state) => {
      state.isLoading = true;
    },
    [deleteApi.rejected.type]: (state, action: PayloadAction<string>) => {
      state.userError = action.payload;
      state.isLoading = false;
    },
    //checkApi states
    [checkApi.fulfilled.type]: (state, action: PayloadAction<ApiResponse>) => {
      state.isLoading = false;
      state.userError = "";
      state.isApiChecked = true;
    },
    [checkApi.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkApi.rejected.type]: (
      state,
      action: RejectedWithValueAction<string>
    ) => {
      state.isLoading = false;
      state.isApiChecked = true;
      state.isUserError = true;
      state.userError = action.payload;
    },
  },
});

export const { setApiChecked, setErrotStatus } = userSlice.actions;

export default userSlice.reducer;
