/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Platform, StyleSheet} from 'react-native';
import Metrics from '../../theme/Metrics';

const LogoHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/img/Logo.png')}
        resizeMode="contain"
        style={{height: Metrics._scale(145)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
    // backgroundColor: 'red',
  },
});
export default LogoHeader;
