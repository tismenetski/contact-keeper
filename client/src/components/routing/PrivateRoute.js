import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Standard way to create a private route

  const authContext = useContext(AuthContext);

  const { isAuthenticated, loading } = authContext;

  return (
    <Route // Create a route that is private, therefore only users who are authenticated can view this route, in any other case the user gets redirected to the login page
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
