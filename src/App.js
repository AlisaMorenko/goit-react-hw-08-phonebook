import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import authOperations from './redux/Auth/auth-operations';
import authSelectors from './redux/Auth/auth-selectors';
import PrivateRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';
import Loader from 'react-loader-spinner';

import AppMenu from './components/AppMenu';
const Home = lazy(() =>
  import('./View/Home' /* webpackChunkName: "homePage" */),
);

const ContactView = lazy(() =>
  import('./View/ContactView' /* webpackChunkName: "ContactView" */),
);

const NotFoundView = lazy(() =>
  import(
    './components/NotFoundView/NotFoundView' /* webpackChunkName: "NotFoundView" */
  ),
);

const Login = lazy(() =>
  import('./View/Login' /* webpackChunkName: "Login" */),
);

const Register = lazy(() =>
  import('./View/Register' /* webpackChunkName: "Register" */),
);

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
        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
          }
        >
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
        </Suspense>
      </>
    )
  );
}
