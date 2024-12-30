import { useState } from 'react';
import  { Navigate } from 'react-router-dom';
import AuthContext from '../context/index.jsx';
import useAuth from '../hooks/index.jsx';

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('username');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const { loggedIn } = useAuth();

  return (
    loggedIn ? children : <Navigate to="/login" />
  );
};
export default AuthProvider;