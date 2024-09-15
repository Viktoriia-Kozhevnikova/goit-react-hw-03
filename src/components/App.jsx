import { useEffect, useState } from 'react';
import '/src/components/App.css';
import contactData from '/src/contactData.json';
import ContactForm from '/src/components/ContactForm/ContactForm.jsx';
import SearchBox from '/src/components/SearchBox/SearchBox.jsx';
import ContactList from '/src/components/ContactList/ContactList.jsx';
import { nanoid } from 'nanoid';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : contactData;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [searchContact, setSearchContact] = useState('');

  const handleSearchChange = (e) => {
    setSearchContact(e.target.value);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleSubmit = (values, { resetForm }) => {
    setContacts(prevContacts => [
      ...prevContacts,
      { ...values, id: nanoid() }
    ]);
    resetForm();
  };

  const initialValues = {
    name: '',
    number: ''
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} initialValues={initialValues} />
      <SearchBox handleSearchChange={handleSearchChange} searchContact={searchContact} />
      <ContactList contacts={filterContacts} handleDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;