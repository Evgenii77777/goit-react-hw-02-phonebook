import React, { Component } from "react";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import ContactsFilter from "./contactsFilter/ContactsFilter";
import { getFiltered } from "../../redux/contactsAction";
import { connect } from "react-redux";
import {
  // addContactOperation,
  // deleteContactOperation,
  getAllContactOperation,
} from "../../redux/contactsOperations";
import {
  errorSelector,
  getContactsSelector,
  isLoadingSelector,
  filterSelector,
} from "../../redux/contactsSelectors";

class Contacts extends Component {
  async componentDidMount() {
    this.props.getAllContactOperation();
  }

  // setFilter = (e) => {
  //   const { value } = e.target;
  //   this.props.getFiltered(value);
  // };

  // checkDublicateName = (name) => {
  //   return this.props.contacts.some((contact) => contact.name === name);
  // };

  render() {
    return (
      <>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading && <h2>Loading......</h2>}
        <ContactsForm

        // checkDublicateName={this.checkDublicateName}
        />
        <ContactsFilter />
        <ContactsList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContactsSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  filter: filterSelector(state),
});

const mapDispatchToProps = {
  getAllContactOperation,
  getFiltered,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
