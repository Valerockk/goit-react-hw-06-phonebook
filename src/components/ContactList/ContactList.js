import React from "react";
import { connect } from "react-redux";
import ContactListItem from "./ContactListItem";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts }) => (
  <ul className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem key={id} name={name} number={number} id={id} />
    ))}
  </ul>
);

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { contact, filter } = state.contacts;
  const normilizedFilter = filter.toLowerCase();

  const visibleTask = contact.filter((contact) =>
    contact.name.toLowerCase().includes(normilizedFilter)
  );

  return {
    contacts: visibleTask,
  };
};

export default connect(mapStateToProps)(ContactList);
