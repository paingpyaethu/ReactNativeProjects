import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/Home/HomeScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../theme/Colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantScreen from '../../screen/Restaurant/RestaurantScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.PRIMARY_COLOR,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigator;
