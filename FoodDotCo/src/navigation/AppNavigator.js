/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import TabNavigator from './tabs/TabNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {appStart} from '../store/redux/actions/GeneralAction';
import SplashScreen from '../screen/SplashScreen';
import WelcomeScreen from '../screen/WelcomeScreen';

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {_token, isNewUser} = useSelector(state => state.generalState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appStart());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : !_token || _token === null || _token === '' ? (
        isNewUser ? (
          <WelcomeScreen />
        ) : (
          <AuthStack />
        )
      ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
