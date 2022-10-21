import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckoutScreen from '../../screens/Cart/Checkout/CheckoutScreen';
import PaymentScreen from '../../screens/Cart/Checkout/PaymentScreen';
import ConfirmScreen from '../../screens/Cart/Checkout/ConfirmScreen';

const Tab = createMaterialTopTabNavigator();

const CheckoutNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Checkout" component={CheckoutScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Confirm" component={ConfirmScreen} />
    </Tab.Navigator>
  );
};

export default CheckoutNavigator;
