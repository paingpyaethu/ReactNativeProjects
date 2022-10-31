/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from '../stack/HomeStack';
import AdminSettingStack from '../stack/AdminSettingStack';
import CartStack from '../stack/CartStack';

import CartNoti from '../../components/atoms/CartNoti';

// Custom Themes
import {METRICS} from '../../theme';
import ProfileStack from '../stack/auth/ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {height: METRICS.height * 0.1},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="dashboard"
              color={color}
              size={METRICS._scale(30)}
              style={{
                width: METRICS.width / 4,
                textAlign: 'center',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({color}) => (
            <View style={{position: 'relative'}}>
              <CartNoti />
              <Icon
                name="shopping-cart"
                color={color}
                size={METRICS._scale(30)}
                style={{
                  width: METRICS.width / 4,
                  textAlign: 'center',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AdminStack"
        component={AdminSettingStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="admin-panel-settings"
              color={color}
              size={METRICS._scale(30)}
              style={{
                width: METRICS.width / 4,
                textAlign: 'center',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="person"
              color={color}
              size={METRICS._scale(30)}
              style={{
                width: METRICS.width / 4,
                textAlign: 'center',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
