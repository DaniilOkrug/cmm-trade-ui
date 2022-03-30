import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserBot } from "../../types/IUserBot";
import {
  createBot,
  deleteBot,
  getBots,
  startBot,
  stopBot,
} from "./ActionCreator";

interface UserBotState {
  bots: IUserBot[];
  isLoadingBots: boolean;
  error: string;
}

const initialState: UserBotState = {
  bots: [],
  isLoadingBots: false,
  error: "",
};

export const userBotSlice = createSlice({
  name: "userBot",
  initialState,
  reducers: {
    deleteError(state) {
      state.error = "";
    },
    setBotData(state, action: PayloadAction<IUserBot>) {
      const bot = state.bots.find((info) => info.name == action.payload.name);
      if (typeof bot !== "undefined") {
        const index = state.bots.indexOf(bot);
        state.bots[index] = action.payload;
      }
    },
  },
  extraReducers: {
    //sendBotSettings states
    [getBots.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.bots = action.payload;
      state.error = "";
      state.isLoadingBots = false;
    },
    [getBots.pending.type]: (state) => {
      state.isLoadingBots = true;
    },
    [getBots.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoadingBots = false;
    },
    //deleteBot states
    [deleteBot.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.bots = action.payload;
      state.error = "";
      state.isLoadingBots = false;
    },
    [deleteBot.pending.type]: (state) => {
      state.isLoadingBots = true;
    },
    [deleteBot.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoadingBots = false;
    },
    //createBot states
    [createBot.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.bots = action.payload;
      state.error = "";
      state.isLoadingBots = false;
    },
    [createBot.pending.type]: (state) => {
      state.isLoadingBots = true;
    },
    [createBot.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoadingBots = false;
    },
    //startBot states
    [startBot.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.bots = action.payload;
      state.error = "";
      state.isLoadingBots = false;
    },
    [startBot.pending.type]: (state) => {
      state.isLoadingBots = true;
    },
    [startBot.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoadingBots = false;
    },
    //stopBot states
    [stopBot.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.bots = action.payload;
      state.error = "";
      state.isLoadingBots = false;
    },
    [stopBot.pending.type]: (state) => {
      state.isLoadingBots = true;
    },
    [stopBot.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoadingBots = false;
    },
  },
});

export const { deleteError, setBotData } = userBotSlice.actions;

export default userBotSlice.reducer;
