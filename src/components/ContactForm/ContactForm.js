import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as operations from '../../redux/phonebook-operations';
import { getContacts } from '../../redux/phonebook-selectors';
import shortid from 'shortid';

import styles from './contactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  //create ID
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const dispatch = useDispatch();

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return console.log('err');
    }
  };

  //check and add contact
  const submit = e => {
    e.preventDefault();

    if (checkContactsName) {
      alert(`${name} is already in contacts!`);
      reset();
      return;
    }
    dispatch(operations.addContact({ name, number }));
    reset();
  };

  const checkContactsName = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  );

  // reset input in form
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <label htmlFor={nameInputId} className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          autoComplete="off"
          value={name}
          onChange={changeInput}
          required
          id={nameInputId}
          className={styles.input}
        />
      </label>
      <label htmlFor={numberInputId} className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          autoComplete="off"
          value={number}
          onChange={changeInput}
          required
          id={numberInputId}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        add contact
      </button>
    </form>
  );
}
