import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import OrderScreen from '@pages/ProductDetail/Order';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
