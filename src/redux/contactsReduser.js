import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  getFiltered,
  getAllContacts,
} from "./contactsAction";

export const contactsReduser = createReducer([], {
  [getAllContacts]: (_, { payload }) => payload,
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [
    ...state.filter((product) => product.id !== payload),
  ],
});
export const filterReducer = createReducer("", {
  [getFiltered]: (_, { payload }) => payload,
});
