/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';
import {METRICS, COLORS, FONTS} from '../../../themes';

const HeaderMenu = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo/deli_logo.png')}
        style={styles.image}
      />

      <View style={{flex: 1, marginHorizontal: METRICS.width * 0.03}}>
        <Text style={styles.deliverNow}>Deliver Now!</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.currentLocation}>Current Location</Text>
          <IonIcons
            name="chevron-down"
            size={METRICS.width * 0.05}
            color={COLORS.PRIMARY}
          />
        </View>
      </View>

      <IonIcons
        name="person"
        size={METRICS.width * 0.06}
        color={COLORS.PRIMARY}
      />
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: METRICS.width * 0.03,
    marginBottom: METRICS.width * 0.03,
  },

  image: {
    width: METRICS.width * 0.1,
    height: METRICS.width * 0.1,
    borderRadius: METRICS.width * 0.2,
  },
  deliverNow: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.03,
    color: COLORS.NATURAL_DARK_GREY,
  },
  currentLocation: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.045,
    color: COLORS.PRIMARY,
  },
});
