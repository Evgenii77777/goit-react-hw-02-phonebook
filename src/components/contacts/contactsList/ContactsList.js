import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactOperation } from "../../../redux/contactsOperations";
import {
  filterSelector,
  getContactsSelector,
} from "../../../redux/contactsSelectors";

const ContactsList = () => {
  const filter = useSelector(filterSelector);
  const contacts = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  const getFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (e) => {
    dispatch(deleteContactOperation(e.target.id));
  };

  return (
    <>
      <ul>
        Contacts:
        {getFilterContacts().map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button onClick={deleteContact} type="button" id={contact.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
