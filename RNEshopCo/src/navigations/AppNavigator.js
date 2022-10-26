import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/auth/AuthStack';
import TabNavigator from './tabs/TabNavigator';

const AppNavigator = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <NavigationContainer>
      {!isAuth ? ( // false
        <AuthStack />
      ) : (
        <TabNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
