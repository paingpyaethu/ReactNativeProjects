/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Platform, StyleSheet} from 'react-native';

const LogoHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/img/Logo.png')}
        resizeMode="contain"
        style={{height: 150}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
  },
});
export default LogoHeader;
