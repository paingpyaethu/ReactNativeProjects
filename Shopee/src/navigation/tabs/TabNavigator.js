/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stack/HomeStack';
import AdminSettingStack from '../stack/AdminSettingStack';
import ProfileStack from '../stack/ProfileStack';
import CartNoti from '../../components/atoms/CartNoti';
import Metrics from '../../theme/Metrics';
import {useOrientation} from '../../hooks/useOrientation';
import CartStack from '../stack/CartStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const orientation = useOrientation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {height: orientation.height * 0.1},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Icon
              name="dashboard"
              color={color}
              size={Metrics._scale(30)}
              style={{
                width: orientation.width / 4,
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
                size={Metrics._scale(30)}
                style={{
                  width: orientation.width / 4,
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
              size={Metrics._scale(30)}
              style={{
                width: orientation.width / 4,
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
              size={Metrics._scale(30)}
              style={{
                width: orientation.width / 4,
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
