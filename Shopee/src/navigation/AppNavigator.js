import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './tabs/TabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
