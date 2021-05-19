import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import ContactsFilter from "./contactsFilter/ContactsFilter";
import { getFiltered } from "../../redux/contactsAction";
import { connect } from "react-redux";
import {
  addContactOperation,
  deleteContactOperation,
  getAllContactOperation,
} from "../../redux/contactsOperations";
import {
  errorSelector,
  getContactsSelector,
  isLoadingSelector,
  filterSelector,
  getFilterContacts,
} from "../../redux/contactsSelectors";

class Contacts extends Component {
  async componentDidMount() {
    this.props.getAllContactOperation();
  }
  addContact = async (contact) => {
    this.props.addContactOperation(contact);
  };

  deleteContact = async (e) => {
    const { id } = e.target;
    this.props.deleteContactOperation(id);
  };

  setFilter = (e) => {
    const { value } = e.target;
    this.props.getFiltered(value);
  };

  checkDublicateName = (name) => {
    return this.props.contacts.some((contact) => contact.name === name);
  };

  render() {
    return (
      <>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading && <h2>Loading......</h2>}
        <ContactsForm
          addContact={this.addContact}
          checkDublicateName={this.checkDublicateName}
        />
        <ContactsFilter filter={this.props.filter} setFilter={this.setFilter} />
        <ContactsList
          deleteContact={this.deleteContact}
          contacts={this.props.filteredContact}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContactsSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  filter: filterSelector(state),
  filteredContact: getFilterContacts(state),
});

const mapDispatchToProps = {
  getAllContactOperation,
  addContactOperation,
  deleteContactOperation,
  getFiltered,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
