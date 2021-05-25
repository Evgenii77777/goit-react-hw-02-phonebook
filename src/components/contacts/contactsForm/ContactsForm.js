import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetError } from "../../../redux/contactsAction";
import { errorSelector } from "../../../redux/contactsSelectors";
import { Button } from "@material-ui/core";
import { addContactOperation } from "../../../redux/contactsOperations";

export default function ContactsForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    error && dispatch(resetError());
    const { name, value } = e.target;
    name === "name" && setName(value);
    name === "number" && setNumber(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // if (this.props.checkDublicateName(name)) {
    //   alert(`${name} уже есть! `);
    //   return;
    // }
    dispatch(addContactOperation({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name:
          <input
            onChange={onHandleChange}
            value={name}
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
            onChange={onHandleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </form>
    </>
  );
}

// class ContactsForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };
// onHandleChange = (e) => {
//   this.props.error && this.props.resetError();
//   const { name, value } = e.target;
//   this.setState({ [name]: value });
// };
// onHandleSubmit = (e) => {
//   e.preventDefault();
//   if (this.props.checkDublicateName(this.state.name)) {
//     alert(`${this.state.name} уже есть! `);
//     return;
//   }
//   this.props.addContact(this.state);
//   this.setState({
//     name: "",
//     number: "",
//   });
// };
//   render() {
//     return (
//       <>
//         <h2>Phonebook</h2>
//         <form onSubmit={this.onHandleSubmit}>
//           <label>
//             Name:
//             <input
//               onChange={this.onHandleChange}
//               value={this.state.name}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//             />
//           </label>
//           <label>
//             Number:
//             <input
//               onChange={this.onHandleChange}
//               value={this.state.number}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//             />
//           </label>

//           <Button type="submit" variant="contained" color="primary">
//             Add contact
//           </Button>
//         </form>
//       </>
//     );
//   }
// }
// const mapStateToProps = (state, ownProps) => {
//   return {
//     error: errorSelector(state),
//   };
// };
// export default connect(mapStateToProps, { resetError })(ContactsForm);
