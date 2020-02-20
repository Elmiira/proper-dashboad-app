import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from 'containers/Dashboard/Loadable';
import Login from 'containers/Login/Loadable';
import PrivateRoute from './PrivateRoute';
import Routes from './Routes.json';
import Tenant from 'containers/Tenant/Loadable';


export const PublicRoutes = () => (
  <Switch>
    <Route key={Routes.Login} path={Routes.Login} component={Login} />,
    <Route
      key={Routes.Dashboard}
      path={Routes.Dashboard}
      component={Dashboard}
    />
  </Switch>
);

export const PrivateRoutes = ({ match }) => (
  <Switch>
    {routes.map(route => (
      <PrivateRoute
        match={match}
        key={route.path}
        path={`${match.url}${route.path}`}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);

const routes = [
  { path: Routes.Tenant, exact: true, component: Tenant },
];
