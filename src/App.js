import { useDispatch } from 'react-redux';
import { getContacts } from './redux/phonebook-operations';
import { Route, Switch } from 'react-router-dom';

import AppMenu from './components/AppMenu';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import NotFoundView from './components/NotFoundView/NotFoundView';

export default function App() {
  const dispatch = useDispatch();
  dispatch(getContacts());

  return (
    <>
      <AppMenu />
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
      <Switch>
        <Route path="/register" exact>
          {/* <MoviesPage /> */}
        </Route>

        <Route path="/login" exact>
          {/* <MoviesPage /> */}
        </Route>

        <Route path="/contacts" exact>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </>
  );
}
