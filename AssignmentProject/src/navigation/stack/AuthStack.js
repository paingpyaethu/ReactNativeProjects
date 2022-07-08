import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthScreen from '../../pages/Auth/AuthScreen';
import SecurityScreen from '../../pages/Auth/SecurityScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="PasswordSecurity" component={SecurityScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
