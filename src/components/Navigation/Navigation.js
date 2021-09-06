import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/Auth/auth-selectors';

import styles from './navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          exact
          to="/contacts"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
