import React, {useLayoutEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../../screens/Home/HomeScreen';

import {ROUTES} from '../../../themes';
import ProductDetailScreen from '../../../screens/Home/ProductDetailScreen';
import {OrderScreen} from '../../../screens';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import CheckOutScreen from '../../../screens/Order/CheckoutScreen';

const Stack = createStackNavigator();

const HomeStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const tabHiddenRoutes = [ROUTES.CHECK_OUT, ROUTES.ORDER];

    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
  }, [navigation, route]);
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
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={ROUTES.CHECK_OUT}
        component={CheckOutScreen}
        options={{
          headerShown: false,
        }}
      />
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

export default HomeStack;
