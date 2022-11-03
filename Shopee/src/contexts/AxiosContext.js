import axios from 'axios';
import React, {createContext} from 'react';
import {BASE_URL} from '../store/api_endpoint';

export const AxiosContext = createContext();

export const AxiosProvider = ({children}) => {
  const authAxios = axios.create({
    baseURL: BASE_URL,
  });
  const publicAxios = axios.create({
    baseURL: BASE_URL,
  });
  return (
    <AxiosContext.Provider value={{authAxios, publicAxios}}>
      {children}
    </AxiosContext.Provider>
  );
};
