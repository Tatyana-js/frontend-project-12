import { useState, useEffect, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './index.jsx';
import useAuth from '../hooks/index.jsx';

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const logIn = (token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setLoggedIn(false);
  };

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const value = useMemo(() => ({
    loggedIn,
    logIn,
    logOut,
    username,
    token,
  }), [loggedIn, username, token]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const PrivateRoute = ({ children }) => {
  const { loggedIn } = useAuth();

  return (
    loggedIn ? children : <Navigate to="/login" />
  );
};
export default AuthProvider;
