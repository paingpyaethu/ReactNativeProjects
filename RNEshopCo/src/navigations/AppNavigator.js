import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './stacks/auth/AuthStack';
import DrawerNavigator from './drawers/DrawerNavigator';

const AppNavigator = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <NavigationContainer>
      {!isAuth ? ( // false
        <AuthStack />
      ) : (
        <DrawerNavigator />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
