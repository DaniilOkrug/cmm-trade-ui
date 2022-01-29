import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";
import { login } from "./ActionCreator";

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
    [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
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
      console.log(`Error: ${state.error}`);
      
    },
  },
});

export default userSlice.reducer;
