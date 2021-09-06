import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/Phonebook/phonebook-actions';
import { getFilter } from '../../redux/Phonebook/phonebook-selectors';

import TextField from '@material-ui/core/TextField';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <label>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Find contacts by name"
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </label>
  );
}
