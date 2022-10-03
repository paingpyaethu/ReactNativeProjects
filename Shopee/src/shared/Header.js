/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = () => {
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
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    // backgroundColor: 'red',
  },
});
export default Header;
