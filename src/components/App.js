import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = () => {
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
