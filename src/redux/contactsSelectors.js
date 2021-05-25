const getContactsSelector = (state) => state.contacts.items;
const errorSelector = (state) => state.contacts.error;
const isLoadingSelector = (state) => state.contacts.isContactLoading;
const filterSelector = (state) => state.contacts.filter;

export {
  getContactsSelector,
  errorSelector,
  isLoadingSelector,
  filterSelector,
};
