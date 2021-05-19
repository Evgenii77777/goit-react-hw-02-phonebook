import { createAction } from "@reduxjs/toolkit";

const getAllContacts = createAction("getAllContacts");
const addContact = createAction("addContact");
const deleteContact = createAction("deleteContact");
const getFiltered = createAction("getFiltered");
const setContactLoading = createAction("setContactLoading");
const setError = createAction("setError");
const resetError = createAction("resetError");

export {
  getAllContacts,
  addContact,
  deleteContact,
  getFiltered,
  setContactLoading,
  setError,
  resetError,
};
