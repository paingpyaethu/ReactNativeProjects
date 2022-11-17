/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IonIcons from 'react-native-vector-icons/Ionicons';

import {COLORS, METRICS, ROUTES} from '../../themes';
import {
  HomeStack,
  ProductStack,
  WishListStack,
  CartStack,
  ProfileStack,
} from '../stacks/Main';
import {useDispatch, useSelector} from 'react-redux';
import {getWishlist} from '../../stores/slices/wishlists/wishListSlice';
import {AxiosContext} from '../../contexts/AxiosContext';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {authAxios} = useContext(AxiosContext);

  const {wishlists} = useSelector(state => state.wishlists);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      dispatch(getWishlist(authAxios));
    }
    return () => {
      mounted = false;
    };
  }, [dispatch, authAxios]);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY_COLOR,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({color, focused}) => {
          let iconName;

          if (route.name === ROUTES.HOME_TAB) {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === ROUTES.PRODUCT_TAB) {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === ROUTES.WISHLIST_TAB) {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === ROUTES.CART_TAB) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === ROUTES.PROFILE_TAB) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return (
            <IonIcons
              name={iconName}
              size={METRICS._scale(22)}
              color={color}
              style={{width: METRICS.width / 5, textAlign: 'center'}}
            />
          );
        },
      })}>
      <Tab.Screen name={ROUTES.HOME_TAB} component={HomeStack} />
      <Tab.Screen name={ROUTES.PRODUCT_TAB} component={ProductStack} />
      <Tab.Screen
        name={ROUTES.WISHLIST_TAB}
        component={WishListStack}
        options={{
          tabBarBadge: wishlists?.length,
        }}
      />
      <Tab.Screen name={ROUTES.CART_TAB} component={CartStack} />
      <Tab.Screen name={ROUTES.PROFILE_TAB} component={ProfileStack} />
    </Tab.Navigator>
  );
};
export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: METRICS.height * 0.1,
  },
});
