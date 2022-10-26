import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CartScreen from '../../../screens/Cart/CartScreen';
import {ROUTES} from '../../../themes';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
