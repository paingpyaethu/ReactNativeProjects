import axios from 'axios';
import React, {createContext} from 'react';
import {useSelector} from 'react-redux';
import {BASE_URL} from '../store/api_endpoint';

export const AxiosContext = createContext();

export const AxiosProvider = ({children}) => {
  const authContext = useSelector(state => state.auth);

  const authAxios = axios.create({
    baseURL: BASE_URL,
  });
  const publicAxios = axios.create({
    baseURL: BASE_URL,
  });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.accessToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  return (
    <AxiosContext.Provider value={{authAxios, publicAxios}}>
      {children}
    </AxiosContext.Provider>
  );
};
