import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/phonebook-actions';
import { getFilter } from '../../redux/phonebook-selectors';

import styles from './filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <label className={styles.label}>
      {' '}
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
        className={styles.input}
      ></input>
    </label>
  );
}
