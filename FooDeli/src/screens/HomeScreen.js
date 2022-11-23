import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import {COLORS, FONTS, METRICS} from '../themes';

const HomeScreen = () => {
  // const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo/deli_logo.png')}
          style={styles.image}
        />

        <View>
          <Text style={styles.deliverNow}>Deliver Now!</Text>
          <Text style={styles.currentLocation}>Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.NATURAL_LIGHT,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: COLORS.NATURAL_DEFAULT,
  },
});
