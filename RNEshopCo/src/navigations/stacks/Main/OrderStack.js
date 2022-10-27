import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {OrderScreen} from '../../../screens';
import {ROUTES} from '../../../themes';

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.ORDER}
        component={OrderScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
