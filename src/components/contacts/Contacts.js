import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import ContactsFilter from "./contactsFilter/ContactsFilter";
import axios from "axios";
import {
  addContact,
  deleteContact,
  getFiltered,
  getAllContacts,
} from "../../redux/contactsAction";
import { connect } from "react-redux";

class Contacts extends Component {
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
        // this.setState({ contacts });
        this.props.getAllContacts(contacts);
      } else return;
    } catch (error) {
      console.log(error);
    }
  }
  addContact = async (contact) => {
    const response = await axios.post(
      `https://phonebook-e3785-default-rtdb.firebaseio.com/contacts.json`,
      contact
    );
    this.props.addContact({ ...contact, id: response.data.name });
    //   this.setState((prev) => {
    //     return {
    //       contacts: [...prev.contacts, { ...contact, id: response.data.name }],
    //     };
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  deleteContact = async (e) => {
    const { id } = e.target;

    await axios.delete(
      `https://phonebook-e3785-default-rtdb.firebaseio.com/contacts/${id}.json`
    );
    this.props.deleteContact(id);
    //   this.setState({
    //     contacts: this.state.contacts.filter((contact) => contact.id !== id),
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  setFilter = (e) => {
    const { value } = e.target;
    this.props.getFiltered(value);
  };
  getFilteredContacts = () => {
    return this.props.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.props.filter.toLocaleLowerCase())
    );
  };
  checkDublicateName = (name) => {
    return this.props.contacts.some((contact) => contact.name === name);
  };

  render() {
    return (
      <>
        <ContactsForm
          addContact={this.addContact}
          checkDublicateName={this.checkDublicateName}
        />
        <ContactsFilter filter={this.props.filter} setFilter={this.setFilter} />
        <ContactsList
          contacts={this.props.contacts}
          deleteClient={this.deleteContact}
          contacts={this.getFilteredContacts()}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: (contacts) => {
      dispatch(getAllContacts(contacts));
    },
    addContact: (contacts) => {
      dispatch(addContact(contacts));
    },
    deleteContact: (contacts) => {
      dispatch(deleteContact(contacts));
    },
    getFiltered: (contacts) => {
      dispatch(getFiltered(contacts));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
