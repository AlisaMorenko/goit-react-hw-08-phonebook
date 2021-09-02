import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppMenu.module.css';

export default function AppMenu() {
  return (
    <nav>
      <NavLink
        exact
        to="/register"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Sign up
      </NavLink>
      <NavLink
        exact
        to="/login"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Sign in
      </NavLink>
      <NavLink
        exact
        to="/contacts"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
