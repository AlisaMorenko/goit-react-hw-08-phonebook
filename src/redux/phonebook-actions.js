import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('phonebook/getContactsRequest');
export const getContactsSuccess = createAction('phonebook/getContactsSuccess');
export const getContactsError = createAction('phonebook/getContactsError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const delContactRequest = createAction('phonebook/delContactRequest');
export const delContactSuccess = createAction('phonebook/delContactSuccess');
export const delContactError = createAction('phonebook/delContactError');

export const changeFilter = createAction('phonebook/changeFilter');
