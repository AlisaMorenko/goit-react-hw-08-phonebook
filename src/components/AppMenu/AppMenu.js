import React from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import authSelectors from '../../redux/Auth/auth-selectors';

export default function AppMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      {/* <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Home
      </NavLink> */}

      {/* <NavLink
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
      </NavLink> */}
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      {/* <NavLink ///////////////////////временно
        exact
        to="/contacts"
        className={styles.link}
        activeClassName={styles.linkActive}
      >
        Contacts
      </NavLink> */}
    </header>
  );
}
