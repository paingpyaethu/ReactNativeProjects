import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WishListScreen from '../../../screens/WishList/WishListScreen';
import {ROUTES} from '../../../themes';

const Stack = createStackNavigator();

const WishListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.WISHLIST}
        component={WishListScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default WishListStack;
