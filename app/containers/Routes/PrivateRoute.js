import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { getToken } from 'utils/manipulateCookies';

const PrivateRoute = ({ component: Component, match, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to={`${match.url}login`} />
      )
    }
  />
);

export default PrivateRoute;
