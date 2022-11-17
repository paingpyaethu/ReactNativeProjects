import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/auth/AuthStack';
import DrawerNavigator from './drawers/DrawerNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {loadJWT} from '../stores/slices/auth/authSlice';
import SplashScreen from '../components/atoms/SplashScreen';

const AppNavigator = () => {
  const auth = useSelector(state => state.auth);
  console.log('Auth::: ', auth);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJWT());
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {auth.authenticated === true ? <DrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
