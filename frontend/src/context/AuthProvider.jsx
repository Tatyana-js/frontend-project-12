import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/index.jsx';
import AuthContext from '../context/index.jsx';
import router from '../utils/routes.js';

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

export const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    auth.loggedIn ? children : navigate(router.mainPath)
  );
};

export default AuthProvider;