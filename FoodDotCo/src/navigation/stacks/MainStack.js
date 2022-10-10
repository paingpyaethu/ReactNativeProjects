import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from '../../screen/SplashScreen';
import WelcomeScreen from '../../screen/WelcomeScreen';
import AuthScreen from '../../screen/Auth/AuthScreen';
import ForgotPwdScreen from '../../screen/Auth/ForgotPwdScreen';
import RegisterPhoneScreen from '../../screen/Auth/RegisterPhoneScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="ForgotPwdScreen" component={ForgotPwdScreen} />
      <Stack.Screen
        name="RegisterPhoneScreen"
        component={RegisterPhoneScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
