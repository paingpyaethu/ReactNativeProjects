import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductsScreen from '../../screens/Admin/ProductsScreen';
import CategoriesScreen from '../../screens/Admin/CategoriesScreen';
import OrdersScreen from '../../screens/Admin/OrdersScreen';
import ProductFormScreen from '../../screens/Admin/ProductFormScreen';
import ProductDetailScreen from '../../screens/ProductDetail/ProductDetailScreen';

const Stack = createStackNavigator();

const AdminSettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Admin Products"
        component={ProductsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AdminProductDetail"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Admin Product Form"
        component={ProductFormScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Admin Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Admin Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AdminSettingStack;
