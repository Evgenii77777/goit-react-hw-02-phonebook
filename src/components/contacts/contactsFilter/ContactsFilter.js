import React from "react";

const ContactsFilter = ({ filter, setFilter }) => {
  return (
    <label>
      Filter:
      <input type="text" value={filter} onChange={setFilter} />
    </label>
  );
};

export default ContactsFilter;
