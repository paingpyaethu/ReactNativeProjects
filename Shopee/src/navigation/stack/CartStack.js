import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CartScreen from '../../screens/Cart/CartScreen';
import CheckoutNavigator from '../tabs/CheckoutNavigator';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutNavigator}
        options={{
          title: 'Checkout',
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
