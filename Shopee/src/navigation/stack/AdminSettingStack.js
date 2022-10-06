import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdminScreen from '../../screens/AdminScreen';

const Stack = createNativeStackNavigator();

const AdminSettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AdminSettingStack;
