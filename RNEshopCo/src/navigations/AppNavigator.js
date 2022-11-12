import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/auth/AuthStack';
import DrawerNavigator from './drawers/DrawerNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {loadJWT} from '../stores/slices/auth/authSlice';

const AppNavigator = () => {
  const auth = useSelector(state => state.auth);
  console.log('Auth::: ', auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJWT());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {auth.authenticated === true ? <DrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
