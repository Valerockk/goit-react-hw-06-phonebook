import React from "react";
import { connect } from "react-redux";
import styles from "./ContactList.module.css";
import contactsActions from "../../redux/contacts/contactsActions";
import PropTypes from "prop-types";

const ContactListItem = ({ name, number, id, onRemove }) => (
  <li className={styles.ContactList_item}>
    <p>
      - {name}: {number}
    </p>
    <button
      type="button"
      onClick={onRemove}
      className={styles.ContactList_item_btn}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch, ownprops) => ({
  onRemove: () => dispatch(contactsActions.removeContact(ownprops.id)),
});

export default connect(null, mapDispatchToProps)(ContactListItem);
