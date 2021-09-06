import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './phonebook-actions.js';

export const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};

export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error.message)));
  };

export const delContact = id => dispatch => {
  dispatch(delContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(delContactSuccess(id)))
    .catch(error => dispatch(delContactError(error.message)));
};
