import React, { createContext, useState } from 'react';
import { axiosInstance } from '../util/axiosInstance';

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    userInfo: {},
  });

  const setAuthInfo = ({ token, userInfo }) => {
    console.log('setAuthInfo', { token, userInfo });
    setAuthState({
      token,
      userInfo,
    });
  };
  const isAuthenticated = () => {
    return !!authState.token;
  };
  const logout = async () => {
    await axiosInstance.delete('/auth/logout');
    setAuthState({
      token: null,
      userInfo: {},
    });
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
