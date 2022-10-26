import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../../screens/Home/HomeScreen';
import ProductDetails from '../../../components/organisms/Home/ProductDetails';

import {ROUTES} from '../../../themes';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={ROUTES.PRODUCT_DETAIL}
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
