import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBot } from "../../types/iBot";
import { IPumpDumpFilter } from "../../types/IPumpDumpFilter";
import { BotSettingsResponse } from "../../types/response/BotSettingsResponse";
import { getBlackList, getBotSettings, sendBotSettings } from "./ActionCreator";

interface BotState {
  botSettings: IBot;
  futurePairs: [string];
  spotPairs: [string];
  currentPairs: string[];
  timeframes: [string];
  blacklist: string[];
  botSettingsUpdated: boolean; //For settings
  currentPairsUpdated: boolean; //For settings
  rsiTimeframesUpdated: boolean; //For settings
  PDFilterUpdated: boolean; //For settings
  blacklistUpdated: boolean; // For blacklist
  isLoadingBot: boolean;
  error: string;
}

const initialState: BotState = {
  botSettings: {} as IBot,
  futurePairs: [""],
  spotPairs: [""],
  currentPairs: [""],
  timeframes: [""],
  blacklist: [""],
  botSettingsUpdated: false,
  currentPairsUpdated: false,
  rsiTimeframesUpdated: false,
  PDFilterUpdated: false,
  blacklistUpdated: false,
  isLoadingBot: false,
  error: "",
};

export const botSlice = createSlice({
  name: "bot",
  initialState,
  reducers: {
    setBotSettingsUpdate(state, action: PayloadAction<boolean>) {
      state.botSettingsUpdated = action.payload;
    },
    //Active pairs reducers
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
    //RSI reducers
    addRsiTimeframe(state, action: PayloadAction<string>) {
      if (!state.botSettings.analyzer.rsi.timeframes.includes(action.payload)) {
        state.botSettings.analyzer.rsi.timeframes.push(action.payload);
      }
      state.rsiTimeframesUpdated = true;
    },
    deleteRsiTimeframe(state, action: PayloadAction<string>) {
      const index = state.botSettings.analyzer.rsi.timeframes.indexOf(
        action.payload
      );
      if (index > -1) {
        state.botSettings.analyzer.rsi.timeframes.splice(index, 1);
        state.rsiTimeframesUpdated = true;
      }
    },
    setRsiTimeframeUpdate(state, action: PayloadAction<boolean>) {
      state.rsiTimeframesUpdated = action.payload;
    },
    //Pump ad Dump reducers
    addPDFilter(state, action: PayloadAction<IPumpDumpFilter>) {
      for (
        let i = 0;
        i < state.botSettings.analyzer.pampAndDump.filters.length;
        i++
      ) {
        const filter = state.botSettings.analyzer.pampAndDump.filters[i];

        if (filter.period === action.payload.period) {
          state.botSettings.analyzer.pampAndDump.filters[i].priceChange =
            action.payload.priceChange;
          state.PDFilterUpdated = true;
          return;
        }
      }
      state.botSettings.analyzer.pampAndDump.filters.push(action.payload);
      state.PDFilterUpdated = true;
    },
    deleteDPFilter(state, action: PayloadAction<{ period: Number }>) {
      const index = state.botSettings.analyzer.pampAndDump.filters.findIndex(
        (filter) => filter.period === action.payload.period
      );
      if (index > -1) {
        state.botSettings.analyzer.pampAndDump.filters.splice(index, 1);
        state.PDFilterUpdated = true;
      }
    },
    setPDEnabled(state, action: PayloadAction<boolean>) {
      state.botSettings.analyzer.pampAndDump.enabled = action.payload;
      state.PDFilterUpdated = true;
    },
    setPDFiltersUpdate(state, action: PayloadAction<boolean>) {
      state.PDFilterUpdated = action.payload;
    },
    //Blacklist
    setBlacklistUpdate(state, action: PayloadAction<boolean>) {
      state.blacklistUpdated = action.payload;
    },

    deleteBlacklistPair(state, action: PayloadAction<string>) {
      const index = state.blacklist.indexOf(action.payload);

      if (index > -1) {
        state.blacklist.splice(index, 1);
        state.blacklistUpdated = true;
      }
    },

    addBlacklistPair(state, action: PayloadAction<string>) {
      if (!state.blacklist.includes(action.payload)) {
        state.blacklist.push(action.payload);
        state.blacklistUpdated = true;
      }
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
      state.timeframes = action.payload.timeframes;
      state.error = "";
      state.isLoadingBot = false;
      state.botSettingsUpdated = true;
    },
    [getBotSettings.pending.type]: (state) => {
      state.isLoadingBot = true;
    },
    [getBotSettings.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoadingBot = false;
    },
    //sendBotSettings states
    [sendBotSettings.fulfilled.type]: (state, action: PayloadAction<IBot>) => {
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
    //getBlackList
    [getBlackList.fulfilled.type]: (
      state,
      action: PayloadAction<{ blacklist: string[]; spotPairs: [string] }>
    ) => {
      state.blacklist = action.payload.blacklist.sort();
      state.spotPairs = action.payload.spotPairs.sort();
      state.error = "";
      state.isLoadingBot = false;
      state.blacklistUpdated = true;
    },
    [getBlackList.pending.type]: (state) => {
      state.isLoadingBot = true;
    },
    [getBlackList.rejected.type]: (state, action: PayloadAction<string>) => {
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
  addRsiTimeframe,
  deleteRsiTimeframe,
  setRsiTimeframeUpdate,
  setBotSettingsUpdate,
  setPDFiltersUpdate,
  addPDFilter,
  deleteDPFilter,
  setBlacklistUpdate,
  deleteBlacklistPair,
  addBlacklistPair,
  setPDEnabled,
} = botSlice.actions;

export default botSlice.reducer;
