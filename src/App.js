import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import authOperations from './redux/Auth/auth-operations';
import authSelectors from './redux/Auth/auth-selectors';
import PrivateRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

import AppMenu from './components/AppMenu';
import Home from './View/Home';
import ContactView from './View/ContactView';
import NotFoundView from './components/NotFoundView/NotFoundView';
import Login from './View/Login';
import Register from './View/Register';

export default function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppMenu />

        <Switch>
          <PublicRoute path="/" exact>
            <Home />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <Register />
          </PublicRoute>

          <PublicRoute path="/login" restricted>
            <Login />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <ContactView />
          </PrivateRoute>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </>
    )
  );
}
