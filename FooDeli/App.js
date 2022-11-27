import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import {ROUTES} from './src/themes';
import RestaurantScreen from './src/screens/RestaurantScreen';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import CartScreen from './src/screens/CartScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.HOME}
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ROUTES.RESTAURANT}
            component={RestaurantScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ROUTES.CART}
            component={CartScreen}
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ROUTES.PREPARING_ORDER}
            component={PreparingOrderScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ROUTES.DELIVERY}
            component={DeliveryScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
