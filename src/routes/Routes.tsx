import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import SearchAutoComplete from '../pages/Ticket/SearchTicket';

const isAuthenticated = true;

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) => (
    isAuthenticated
      ? React.createElement(component, props)
      : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  );
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} render={routeComponent} />;
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <SearchAutoComplete />} />
      <PrivateRoute path="/app" component={() => <h1>Logado</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;