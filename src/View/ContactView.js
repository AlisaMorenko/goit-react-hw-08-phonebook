import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../redux/Phonebook/phonebook-operations';

import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

export default function TodosView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContacts()), [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
