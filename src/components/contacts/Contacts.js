import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
// import { v4 as uuidv4 } from "uuid";
import ContactsFilter from "./contactsFilter/ContactsFilter";
import axios from "axios";

class Contacts extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://phonebook-e3785-default-rtdb.firebaseio.com/contacts.json`
      );

      if (response.data) {
        const contacts = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));
        this.setState({ contacts });
      } else return;
    } catch (error) {
      console.log(error);
    }
  }
  addContact = async (contact) => {
    try {
      const response = await axios.post(
        `https://phonebook-e3785-default-rtdb.firebaseio.com/contacts.json`,
        contact
      );
      this.setState((prev) => {
        return {
          contacts: [...prev.contacts, { ...contact, id: response.data.name }],
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteClient = async (e) => {
    const { id } = e.target;
    try {
      await axios.delete(
        `https://phonebook-e3785-default-rtdb.firebaseio.com/contacts/${id}.json`
      );
      this.setState({
        contacts: this.state.contacts.filter((contact) => contact.id !== id),
      });
    } catch (error) {
      console.log(error);
    }
  };

  setFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  getFilteredClients = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };
  checkDublicateName = (name) => {
    return this.state.contacts.some((contact) => contact.name === name);
  };

  render() {
    return (
      <>
        <ContactsForm
          addContact={this.addContact}
          checkDublicateName={this.checkDublicateName}
        />
        <ContactsFilter filter={this.state.filter} setFilter={this.setFilter} />
        <ContactsList
          contacts={this.state.contacts}
          deleteClient={this.deleteClient}
          contacts={this.getFilteredClients()}
        />
      </>
    );
  }
}

export default Contacts;
