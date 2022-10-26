import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../../screens/Profile/ProfileScreen';
import {ROUTES} from '../../../themes';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
