import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserBot } from "../../types/IUserBot";
import { RejectedWithValueAction } from "../../types/response/RejectWithValue";
import { UserBotActionType } from "../../types/UserBotActionType";
import {
  createBot,
  deleteBot,
  getBots,
  startBot,
  stopBot,
} from "./ActionCreator";

interface UserBotState {
  bots: IUserBot[];
  lastActionType: UserBotActionType;
  isLoadingBots: boolean;
  isUserBotError: boolean;
  userBotError: string;
}

const initialState: UserBotState = {
  bots: [],
  lastActionType: UserBotActionType.none,
  isLoadingBots: false,
  isUserBotError: false,
  userBotError: "",
};

export const userBotSlice = createSlice({
  name: "userBot",
  initialState,
  reducers: {
    deleteError(state) {
      state.userBotError = "";
    },
    setBotData(state, action: PayloadAction<IUserBot>) {
      const bot = state.bots.find((info) => info.name === action.payload.name);
      if (typeof bot !== "undefined") {
        const index = state.bots.indexOf(bot);
        state.bots[index] = action.payload;
      }
    },
    setUserBotErrorStatus(state, action: PayloadAction<boolean>) {
      state.isUserBotError = action.payload;
    },
    setLastActionType(state, action: PayloadAction<UserBotActionType>) {
      state.lastActionType = action.payload;
    },
  },
  extraReducers: {
    //sendBotSettings states
    [getBots.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.lastActionType = UserBotActionType.getBots;
      state.bots = action.payload;
      state.userBotError = "";
      state.isLoadingBots = false;
    },
    [getBots.pending.type]: (state) => {
      state.isLoadingBots = true;
      state.isUserBotError = false;
      state.lastActionType = UserBotActionType.loading;
      state.userBotError = "";
    },
    [getBots.rejected.type]: (
      state,
      action: RejectedWithValueAction<string>
    ) => {
      state.lastActionType = UserBotActionType.getBots;
      state.isUserBotError = true;
      state.userBotError = action.payload;
      state.isLoadingBots = false;
    },

    //deleteBot states
    [deleteBot.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.lastActionType = UserBotActionType.deleteBot;
      state.bots = action.payload;
      state.userBotError = "";
      state.isLoadingBots = false;
    },
    [deleteBot.pending.type]: (state) => {
      state.isLoadingBots = true;
      state.isUserBotError = false;
      state.lastActionType = UserBotActionType.loading;
      state.userBotError = "";
    },
    [deleteBot.rejected.type]: (
      state,
      action: RejectedWithValueAction<string>
    ) => {
      state.lastActionType = UserBotActionType.deleteBot;
      state.isUserBotError = true;
      state.userBotError = action.payload;
      state.isLoadingBots = false;
    },

    //createBot states
    [createBot.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.lastActionType = UserBotActionType.createBot;
      state.bots = action.payload;
      state.userBotError = "";
      state.isLoadingBots = false;
    },
    [createBot.pending.type]: (state) => {
      state.isLoadingBots = true;
      state.isUserBotError = false;
      state.lastActionType = UserBotActionType.loading;
      state.userBotError = "";
    },
    [createBot.rejected.type]: (
      state,
      action: RejectedWithValueAction<string>
    ) => {
      state.lastActionType = UserBotActionType.createBot;
      state.isUserBotError = true;
      state.userBotError = action.payload;
      state.isLoadingBots = false;
    },

    //startBot states
    [startBot.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.lastActionType = UserBotActionType.startBot;
      state.bots = action.payload;
      state.userBotError = "";
      state.isLoadingBots = false;
    },
    [startBot.pending.type]: (state) => {
      state.isLoadingBots = true;
      state.isUserBotError = false;
      state.lastActionType = UserBotActionType.loading;
      state.userBotError = "";
    },
    [startBot.rejected.type]: (
      state,
      action: RejectedWithValueAction<string>
    ) => {
      state.lastActionType = UserBotActionType.startBot;
      state.isUserBotError = true;
      state.userBotError = action.payload;
      state.isLoadingBots = false;
    },

    //stopBot states
    [stopBot.fulfilled.type]: (state, action: PayloadAction<IUserBot[]>) => {
      state.lastActionType = UserBotActionType.stopBot;
      state.bots = action.payload;
      state.userBotError = "";
      state.isLoadingBots = false;
    },
    [stopBot.pending.type]: (state) => {
      state.isLoadingBots = true;
      state.isUserBotError = false;
      state.lastActionType = UserBotActionType.loading;
      state.userBotError = "";
    },
    [stopBot.rejected.type]: (
      state,
      action: RejectedWithValueAction<string>
    ) => {
      state.lastActionType = UserBotActionType.stopBot;
      state.isUserBotError = true;
      state.userBotError = action.payload;
      state.isLoadingBots = false;
    },
  },
});

export const {
  deleteError,
  setBotData,
  setUserBotErrorStatus,
  setLastActionType,
} = userBotSlice.actions;

export default userBotSlice.reducer;
