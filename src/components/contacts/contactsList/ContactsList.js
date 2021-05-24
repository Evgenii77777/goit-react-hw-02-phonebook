import React from "react";

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        Contacts:
        {contacts.map((contact) => (
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
