import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactListItem.module.css';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ContactListItem = ({ id, name, number, onDelete }) => {
  const classes = useStyles();

  return (
    <li className={styles.contact}>
      <IconButton
        aria-label="delete"
        className={classes.margin}
        variant="outlined"
        color="disabled"
        size="small"
        type="button"
        onClick={() => onDelete(id)}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
      <span className={styles.name}>{name}</span> <span>tel: {number}</span>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactListItem;
