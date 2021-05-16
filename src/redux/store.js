import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser, filterReducer } from "./contactsReduser";

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
