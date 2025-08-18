import logger from "redux-logger";
import reducers from "../reducers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch as originalUseDispatch, useSelector as originalUseSelector } from "react-redux";
import config from "../../configs/config";

const combinedReducers = combineReducers({
    app: reducers.appReducer,
    superheroes: reducers.superheroesReducer,
});

const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) => (config.DEVELOPMENT ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => originalUseDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = originalUseSelector;

export default store;
