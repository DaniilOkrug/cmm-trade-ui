import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";
import { checkAuth, login, logout, registration } from "./ActionCreator";

interface UserState {
  user: IUser;
  isLoading: boolean;
  isAuth: boolean;
  error: string;
}

const initialState: UserState = {
  user: {} as IUser,
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
      console.log("checkAuth.fulfilled");
      state.user = action.payload;
      state.isAuth = action.payload ? true : false;
      state.isLoading = false;
    },
    [checkAuth.pending.type]: (state) => {
      console.log("checkAuth.pending");
      state.isLoading = true;
    },
    [checkAuth.rejected.type]: (state, action: PayloadAction<any>) => {
      console.log("checkAuth.rejected");
      state.user = {} as IUser;
      state.isAuth = false;
      state.isLoading = true;
      state.error = action.payload;
    },
    //Logout states
    [logout.fulfilled.type]: (state) => {
      state.user = {} as IUser;
      state.isAuth = false;
      state.isLoading = false;
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
    },
    [registration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registration.rejected.type]: (state) => {
      state.user = {} as IUser;
      state.isAuth = false;
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
