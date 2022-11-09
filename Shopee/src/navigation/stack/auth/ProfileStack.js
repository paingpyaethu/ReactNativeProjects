import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../../screens/Auth/LoginScreen';
import RegisterScreen from '../../../screens/Auth/RegisterScreen';
import ProfileScreen from '../../../screens/Auth/ProfileScreen';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const ProfileStack = () => {
  const auth = useSelector(state => state.auth);
  console.log('Profile::: ', auth);

  return (
    <Stack.Navigator>
      {!auth.authenticated ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default ProfileStack;
