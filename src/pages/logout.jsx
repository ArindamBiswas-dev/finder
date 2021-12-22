import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { SetUserContext, UserNameContext } from '../App';
import { axiosInstance } from '../util/axiosInstance';

export const Logout = () => {
  const [loading, setLoading] = useState(true);
  const { setUserName } = useContext(UserNameContext);
  const setUser = useContext(SetUserContext);
  const history = useHistory();

  useEffect(() => {
    axiosInstance
      .delete('/auth/logout')
      .then((response) => {
        setLoading(false);
        setUser(null);
        setUserName(null);
        history.push('/');
      })
      .finally(() => setLoading(false));
  }, []);

  return null;
};
