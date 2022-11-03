import React, {useReducer, useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {authReducer} from '../reducers/Auth.reducer';
import AuthGlobal from './AuthGlobal';
import {setCurrentUser} from '../actions/Auth.action';

const AuthContext = props => {
  const initialState = {
    isAuthenticated: null,
    user: {},
  };
  const [stateUser, dispatch] = useReducer(authReducer, initialState);

  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    if (AsyncStorage.jwt) {
      const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : '';
      if (setShowChild) {
        dispatch(setCurrentUser(jwt_decode(decoded)));
      }
    }
    return () => {
      setShowChild(false);
    };
  }, []);

  if (!showChild) {
    return null;
  } else {
    return (
      <AuthGlobal.Provider
        value={{
          stateUser,
          dispatch,
        }}>
        {props.children}
      </AuthGlobal.Provider>
    );
  }
};

export default AuthContext;
