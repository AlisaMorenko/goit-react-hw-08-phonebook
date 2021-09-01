import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { useDispatch } from 'react-redux';
import { getContacts } from './redux/phonebook-operations';

export default function App() {
  const dispatch = useDispatch();
  dispatch(getContacts());

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
