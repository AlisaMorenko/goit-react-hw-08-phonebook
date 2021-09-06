import { NavLink } from 'react-router-dom';
import React from 'react';

import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
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
    </div>
  );
};

export default AuthNav;
