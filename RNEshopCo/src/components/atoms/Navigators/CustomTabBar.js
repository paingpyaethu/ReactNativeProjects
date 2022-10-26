import React from 'react';
import {StyleSheet, View} from 'react-native';

import {BottomTabBar} from '@react-navigation/bottom-tabs';

const CustomTabBar = props => {
  return (
    <View>
      <View style={styles.tabBar} />
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    right: 10,
    left: 10,
    bottom: 38,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
});
