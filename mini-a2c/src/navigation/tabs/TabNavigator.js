import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardStack from '../stack/DashboardStack';
import OrderStack from '../stack/OrderStack';
import ProfileStack from '../stack/ProfileStack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Icons
import DashboardIcon from '../../../assets/icons/dashboard';
import CartIcons from '../../../assets/icons/cartTabs';
import ProfileIcon from '../../../assets/icons/profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          title: 'Dashboard',
          tabBarIcon: ({focused, color, size}) => (
            <DashboardIcon
              width={hp(4)}
              height={hp(4)}
              colors={focused ? '#FFAD41' : '#000'}
              style={{marginTop: hp(1.4)}}
            />
          ),
          tabBarLabelStyle: {
            paddingBottom: hp(1),
            fontSize: hp(1.6),
          },
          tabBarActiveTintColor: '#FFAD41',
          tabBarInactiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="Orderstack"
        component={OrderStack}
        options={{
          title: 'Cart',
          tabBarIcon: ({focused, color, size}) => (
            <CartIcons
              width={hp(3)}
              height={hp(3)}
              colors={focused ? '#FFAD41' : '#000'}
            />
          ),
          tabBarLabelStyle: {
            paddingBottom: hp(1),
            fontSize: hp(1.6),
          },
          tabBarActiveTintColor: '#FFAD41',
          tabBarInactiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <ProfileIcon
              width={hp(3)}
              height={hp(3)}
              colors={focused ? '#FFAD41' : '#000'}
            />
          ),
          tabBarLabelStyle: {
            paddingBottom: hp(1),
            fontSize: hp(1.6),
          },
          tabBarActiveTintColor: '#FFAD41',
          tabBarInactiveTintColor: '#000',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
