import { createAction } from "@reduxjs/toolkit";

export const getAllContacts = createAction("getAllContacts");
export const addContact = createAction("addContact");
export const deleteContact = createAction("deleteContact");
export const getFiltered = createAction("getFiltered");
