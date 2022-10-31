import React from 'react';
import {View, Image, Platform, StyleSheet} from 'react-native';
import {METRICS} from '../../theme';

const LogoHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/img/Logo.png')}
        resizeMode="contain"
        style={{height: METRICS._scale(145)}}
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
