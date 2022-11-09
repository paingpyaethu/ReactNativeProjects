import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CartScreen from '../../screens/Cart/CartScreen';
import CheckoutNavigator from '../tabs/CheckoutNavigator';

const Stack = createStackNavigator();

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
