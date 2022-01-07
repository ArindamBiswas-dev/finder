import React, { useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../util/axiosInstance';
import { AuthContext } from './AuthContext';
import HashLoader from 'react-spinners/HashLoader';

export const AccessTokenShell = ({ children }) => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewAccessToken = () => {
      console.log(`fetching new access token`);
      axiosInstance
        .get('/auth/newaccesstoken')
        .then((res) => {
          // console.log(res.data);
          authContext.setAuthState({
            token: res.data.accessToken,
            userInfo: res.data.user,
          });
          setTimeout(() => {
            setLoading(false);
          }, 700);
          setTimeout(fetchNewAccessToken, 1000 * 60 * 60 - 300);
        })
        .catch((err) => {
          setLoading(false);
        });
    };
    fetchNewAccessToken();
  }, []);

  if (loading)
    return (
      <div className="h-screen w-screen flex justify-center items-center flex-col">
        <HashLoader speedMultiplier={2} color="#3498db" />
        <div className="mt-3">
          <p>Finder Loading...</p>
        </div>
      </div>
    );
  return <>{children}</>;
};
