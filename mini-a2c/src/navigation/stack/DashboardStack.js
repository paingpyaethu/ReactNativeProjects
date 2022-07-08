import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import DashboardScreen from '@pages/Dashboard/Dashboard';
import ProductDetailScreen from '../../pages/ProductDetail/ProductDetailScreen';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
