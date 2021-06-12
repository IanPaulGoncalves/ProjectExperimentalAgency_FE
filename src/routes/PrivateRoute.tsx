import React from 'react';
import { Route } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import Home from '../pages/Home/Home';

const PrivateRoute = ({ element: Component, ...rest }: any) => {
  const account = useAppSelector(state => state.account);
  const auth = Boolean(account.user);
  return (
    <Route
      {...rest}
      element={
        (auth
          ? <Home />
          : Component)
      }
    />
  );
};

export default PrivateRoute;