import { createStore, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension'
import storage from "../redux/storage";
import rootReducers from "./reducers/index";
import thunk from "redux-thunk";

const persistConfig = {
  timeout: 0,
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const initializeStore = () => {
  return createStore( persistedReducer, composeWithDevTools(applyMiddleware(thunk)) );
};