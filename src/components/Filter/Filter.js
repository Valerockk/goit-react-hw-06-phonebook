import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsActions from "../../redux/contacts/contactsActions";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
