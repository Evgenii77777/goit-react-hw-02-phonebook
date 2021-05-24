import axios from "axios";
import {
  addContact,
  deleteContact,
  getAllContacts,
  setContactLoading,
  setError,
} from "./contactsAction";

const addContactOperation = (contact) => async (dispatch, getState) => {
  dispatch(setContactLoading());
  try {
    const response = await axios.post(
      `https://phonebook-e3785-default-rtdb.firebaseio.com/contacts.json`,
      contact
    );
    dispatch(addContact({ ...contact, id: response.data.name }));
  } catch (error) {
    console.dir(error);
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactLoading());
  }
};

const deleteContactOperation = (id) => async (dispatch) => {
  dispatch(setContactLoading());
  try {
    await axios.delete(
      `https://phonebook-e3785-default-rtdb.firebaseio.com/contacts/${id}.json`
    );
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactLoading());
  }
};

const getAllContactOperation = (id) => async (dispatch) => {
  dispatch(setContactLoading());
  try {
    const response = await axios.get(
      `https://phonebook-e3785-default-rtdb.firebaseio.com/contacts.json`
    );

    if (response.data) {
      const contacts = Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }));
      dispatch(getAllContacts(contacts));
    } else return;
  } catch (error) {
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setContactLoading());
  }
};

export { addContactOperation, deleteContactOperation, getAllContactOperation };
