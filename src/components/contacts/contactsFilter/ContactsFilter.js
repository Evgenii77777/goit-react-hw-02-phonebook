import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../../redux/contactsSelectors";
import { getFiltered } from "../../../redux/contactsAction";

const ContactsFilter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const setFilterValue = (e) => dispatch(getFiltered(e.target.value));
  return (
    <label>
      Filter:
      <input type="text" value={filter} onChange={setFilterValue} />
    </label>
  );
};

export default ContactsFilter;
