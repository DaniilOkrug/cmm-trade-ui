import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from './reducers/UserSlice';
import botReducer from "./reducers/BotSlice";
import userBotReducer from "./reducers/UserBotSlice";

const rootReducer = combineReducers({
  userReducer,
  botReducer,
  userBotReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];