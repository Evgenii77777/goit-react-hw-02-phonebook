import { createSelector } from "@reduxjs/toolkit";
const getContactsSelector = (state) => state.items;
const errorSelector = (state) => state.error;
const isLoadingSelector = (state) => state.isContactLoading;
const filterSelector = (state) => state.filter;
const getFilterContacts = createSelector(
  [getContactsSelector, filterSelector],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export {
  getContactsSelector,
  errorSelector,
  isLoadingSelector,
  filterSelector,
  getFilterContacts,
};
