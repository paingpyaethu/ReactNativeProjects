import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import IonIcons from 'react-native-vector-icons/Ionicons';

import {
  ProductStack,
  WishListStack,
  CartStack,
  OrderStack,
  ProfileStack,
} from '../stacks/Main';
import {COLORS, FONTS, METRICS, ROUTES} from '../../themes';
import TabNavigator from '../tabs/TabNavigator';
import CustomDrawer from '../../components/atoms/Navigators/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.SECONDARY_COLOR,
        drawerActiveTintColor: COLORS.LIGHT_GREY,
        drawerInactiveTintColor: COLORS.DARK_GREY,
        drawerStyle: {width: METRICS.width - METRICS._scale(100)},
        drawerLabelStyle: {
          marginLeft: METRICS.width >= 768 ? 0 : METRICS._scale(-15),
          fontSize: METRICS._scale(14),
          fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
        },
        drawerItemStyle: {
          marginBottom:
            METRICS.width >= 768 ? METRICS._scale(10) : METRICS._scale(5),
        },
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={TabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <IonIcons
              name="ios-home-outline"
              size={METRICS._scale(20)}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.PRODUCT_DRAWER}
        component={ProductStack}
        options={{
          title: 'Products',
          drawerIcon: ({focused, color, size}) => (
            <IonIcons
              name="layers-outline"
              size={METRICS._scale(20)}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.WISHLIST_DRAWER}
        component={WishListStack}
        options={{
          title: 'WishList',
          drawerIcon: ({focused, color, size}) => (
            <IonIcons
              name="heart-outline"
              size={METRICS._scale(20)}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.CART_DRAWER}
        component={CartStack}
        options={{
          title: 'Cart',
          drawerIcon: ({focused, color, size}) => (
            <IonIcons
              name="cart-outline"
              size={METRICS._scale(20)}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.ORDER_DRAWER}
        component={OrderStack}
        options={{
          title: 'My Orders',
          drawerIcon: ({focused, color, size}) => (
            <IonIcons
              name="ios-cube-outline"
              size={METRICS._scale(20)}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.PROFILE_DRAWER}
        component={ProfileStack}
        options={{
          title: 'Profile',
          drawerIcon: ({focused, color, size}) => (
            <IonIcons
              name="person-circle-outline"
              size={METRICS._scale(20)}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
