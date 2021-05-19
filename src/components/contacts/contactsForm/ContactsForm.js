import React, { Component } from "react";
import { connect } from "react-redux";
import { resetError } from "../../../redux/contactsAction";
import { errorSelector } from "../../../redux/contactsSelectors";

class ContactsForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onHandleChange = (e) => {
    this.props.error && this.props.resetError();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.props.checkDublicateName(this.state.name)) {
      alert(`${this.state.name} уже есть! `);
      return;
    }
    this.props.addContact(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name:
            <input
              onChange={this.onHandleChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number:
            <input
              onChange={this.onHandleChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    error: errorSelector(state),
  };
};
export default connect(mapStateToProps, { resetError })(ContactsForm);
