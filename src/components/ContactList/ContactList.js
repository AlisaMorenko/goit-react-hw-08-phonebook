import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { delContact } from '../../redux/phonebook-operations';
import {
  getVisibleContacts,
  getLoading,
} from '../../redux/phonebook-selectors';
import ContactListItem from '../ContactListItem';

// import { error} from '../../redux/phonebook-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getLoading);

  // const getError = useSelector(error);

  return (
    <>
      {isLoading && (
        <Loader type="TailSpin" color="red" height={40} width={40} />
      )}

      {/* {getError && <h1>{getError.message}</h1>} */}

      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={id => dispatch(delContact(id))}
          />
        ))}
      </ul>
    </>
  );
}
// если ошибку раскомментировать - 9,16,24 строки- заработает
