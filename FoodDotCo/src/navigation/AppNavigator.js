import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashStack from './stacks/SplashStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SplashStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
