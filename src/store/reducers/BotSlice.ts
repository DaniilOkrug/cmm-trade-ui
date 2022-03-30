import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBot } from "../../types/iBot";
import { BotSettingsResponse } from "../../types/response/BotSettingsResponse";
import { getBotSettings, sendBotSettings } from "./ActionCreator";

interface BotState {
  botSettings: IBot;
  futurePairs: [string];
  spotPairs: [string];
  currentPairs: string[];
  currentPairsUpdated: boolean;
  isLoadingBot: boolean;
  error: string;
}

const initialState: BotState = {
  botSettings: {} as IBot,
  futurePairs: [""],
  spotPairs: [""],
  currentPairs: [""],
  currentPairsUpdated: true,
  isLoadingBot: false,
  error: "",
};

export const botSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {
    addActivePair(state, action: PayloadAction<string>) {
      if (!state.currentPairs.includes(action.payload)) {
        state.currentPairs.push(action.payload);
      }
      state.currentPairsUpdated = true;
    },
    deleteActivePair(state, action: PayloadAction<string>) {
      const index = state.currentPairs.indexOf(action.payload);
      if (index > -1) {
        state.currentPairs.splice(index, 1);
      }
      state.currentPairsUpdated = true;
    },
    clearActivePairs(state) {
      state.currentPairs.length = 0;
      state.currentPairsUpdated = true;
    },
    recoverActivePairs(state) {
      state.currentPairs = state.botSettings.pairs;
      state.currentPairsUpdated = true;
    },
    setCurrentPairsUpdate(state, action: PayloadAction<boolean>) {
      state.currentPairsUpdated = action.payload;
    },
  },
  extraReducers: {
    //getBotSettings states
    [getBotSettings.fulfilled.type]: (
      state,
      action: PayloadAction<BotSettingsResponse>
    ) => {
      state.futurePairs = action.payload.futuresPairs.sort();
      state.spotPairs = action.payload.spotPairs.sort();
      state.currentPairs = action.payload.settings.pairs.sort();
      state.botSettings = action.payload.settings;
      state.error = "";
      state.isLoadingBot = false;
    },
    [getBotSettings.pending.type]: (state) => {
      state.isLoadingBot = true;
    },
    [getBotSettings.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoadingBot = false;
    },
    //sendBotSettings states
    [sendBotSettings.fulfilled.type]: (
      state,
      action: PayloadAction<IBot>
    ) => {
      state.currentPairs = action.payload.pairs.sort();
      state.botSettings = action.payload;
      state.error = "";
      state.isLoadingBot = false;
    },
    [sendBotSettings.pending.type]: (state) => {
      state.isLoadingBot = true;
    },
    [sendBotSettings.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoadingBot = false;
    },
  },
});

export const {
  addActivePair,
  deleteActivePair,
  clearActivePairs,
  recoverActivePairs,
  setCurrentPairsUpdate,
} = botSlice.actions;

export default botSlice.reducer;
