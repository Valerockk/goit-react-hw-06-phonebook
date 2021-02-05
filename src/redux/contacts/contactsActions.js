// import contactsActionsTypes from "./contactsActionsTypes";
import { createAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";

//Обычный Redux
// const addContact = (name, number) => ({
//   type: contactsActionsTypes.ADD,
//   payload: {
//     contact: {
//       id: uuid(),
//       name,
//       number,
//     },
//   },
// });

// const removeContact = (taskId) => ({
//   type: contactsActionsTypes.REMOVE,
//   payload: { taskId },
// });

// const changeFilter = (filter) => ({
//   type: contactsActionsTypes.CHANGE_FILTER,
//   payload: { filter },
// });

//Redux Toolkit
const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    contact: {
      id: uuid(),
      name,
      number,
    },
  },
}));
const removeContact = createAction("contacts/remove");
const changeFilter = createAction("contacts/changeFilter");

export default {
  addContact,
  removeContact,
  changeFilter,
};
