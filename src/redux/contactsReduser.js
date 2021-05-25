import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  getFiltered,
  getAllContacts,
  setContactLoading,
  setError,
  resetError,
} from "./contactsAction";

export const itemsReducer = createReducer([], {
  [getAllContacts]: (_, { payload }) => payload,
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [
    ...state.filter((product) => product.id !== payload),
  ],
});

export const filterReducer = createReducer("", {
  [getFiltered]: (_, { payload }) => payload,
});

export const contactLoaderReducer = createReducer(false, {
  [setContactLoading]: (state) => !state,
});

export const contactErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => "",
});

export const contactsReduser = combineReducers({
  items: itemsReducer,
  isContactLoading: contactLoaderReducer,
  error: contactErrorReducer,
  filter: filterReducer,
});
