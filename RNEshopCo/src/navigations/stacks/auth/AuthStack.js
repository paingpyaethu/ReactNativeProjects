import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../../screens/auth/LoginScreen';
import RegisterScreen from '../../../screens/auth/RegisterScreen';
import ForgotPwdScreen from '../../../screens/auth/ForgotPwdScreen';

import {COLORS, ROUTES} from '../../../themes';
import {HomeScreen} from '../../../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.DARK_GREY,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.REGISTER}
        component={RegisterScreen}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPwdScreen}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name={ROUTES.HOME}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack; //AuthNavigator
