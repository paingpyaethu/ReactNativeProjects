import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../../screen/SplashScreen';
import WelcomeScreen from '../../screen/WelcomeScreen';
import AuthScreen from '../../screen/Auth/AuthScreen';
import ForgotPwdScreen from '../../screen/Auth/ForgotPwdScreen';
import RegisterPhoneScreen from '../../screen/Auth/RegisterPhoneScreen';
import VerifyRegisterScreen from '../../screen/Auth/VerifyRegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="ForgotPwdScreen" component={ForgotPwdScreen} />
      <Stack.Screen
        name="RegisterPhoneScreen"
        component={RegisterPhoneScreen}
      />
      <Stack.Screen
        name="VerifyRegisterScreen"
        component={VerifyRegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
