import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../../../screens/Products/ProductScreen';
import {ROUTES} from '../../../themes';

const Stack = createStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.PRODUCT}
        component={ProductScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
