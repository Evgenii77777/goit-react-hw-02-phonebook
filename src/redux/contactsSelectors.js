import { createSelector } from "@reduxjs/toolkit";
const getContactsSelector = (state) => state.contacts.items;
const errorSelector = (state) => state.contacts.error;
const isLoadingSelector = (state) => state.contacts.isContactLoading;
const filterSelector = (state) => state.contacts.filter;
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
