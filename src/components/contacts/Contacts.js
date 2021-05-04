import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import { v4 as uuidv4 } from "uuid";
import ContactsFilter from "./contactsFilter/ContactsFilter";

class Contacts extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ contact }) => {
    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, { ...contact, id: uuidv4() }],
      };
    });
  };
  deleteClient = (e) => {
    const { id } = e.target;
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };
  setFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  getFilteredClients = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    return (
      <>
        <ContactsForm addContact={this.addContact} />
        <ContactsFilter filter={this.state.filter} setFilter={this.setFilter} />
        <ContactsList
          contacts={this.getFilteredClients()}
          deleteClient={this.deleteClient}
        />
      </>
    );
  }
}

export default Contacts;
