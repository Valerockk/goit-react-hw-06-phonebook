import { combineReducers } from "redux";
// import actionsTypes from "./contactsActionsTypes";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

//Обычный Redux
// const contact = (
//   state = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermion Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case actionsTypes.ADD:
//       return [...state, payload.contact];

//     case actionsTypes.REMOVE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionsTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

//Redux Toolkit
const addContact = (
  state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermion Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  action
) => {
  return [...state, action.payload.contact];
};

const removeContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const changeFilter = (state, action) => {
  return state.filter((task) => task.id !== action.payload);
};

const contact = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.removeContact]: removeContact,
  [contactsActions.changeFilter]: changeFilter,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  contact,
  filter,
});
