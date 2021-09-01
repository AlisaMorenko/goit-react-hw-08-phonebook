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
} from './phonebook-actions';
axios.defaults.baseURL = 'http://localhost:4040';

export const getContacts = () => dispatch => {
  dispatch(getContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch(error => dispatch(getContactsError(error)));
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
      .catch(error => dispatch(addContactError(error)));
  };

export const delContact = id => dispatch => {
  dispatch(delContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(delContactSuccess(id)))
    .catch(error => dispatch(delContactError(error)));
};
