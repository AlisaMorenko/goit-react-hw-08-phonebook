import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/Auth/auth-operations';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './register.module.css';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  const classes = useStyles();
  return (
    <div className={styles.register}>
      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <label>
          <TextField
            id="standard-basic"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          <TextField
            id="standard-basic"
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          <TextField
            id="standard-basic"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
