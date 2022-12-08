/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/atoms/CustomButton';

import {COLORS, METRICS} from '../themes';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={[COLORS.PRIMARY_COLOR, COLORS.SECONDARY_COLOR]}
        style={styles.subContainer}>
        <Text style={styles.uber}>Uber</Text>
        <Text style={styles.getThere}>Get there!</Text>

        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
        />
      </LinearGradient>

      <View
        style={{
          marginBottom: METRICS.width >= 768 ? null : METRICS.width * 0.1,
          alignItems: 'center',
        }}>
        <CustomButton btnText={'Get Started'} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.DEFAULT_BLACK,
  },
  subContainer: {
    height: METRICS.width >= 768 ? METRICS.height / 1.2 : METRICS.height / 1.3,
    paddingTop:
      METRICS.width >= 768 ? METRICS.width * 0.1 : METRICS.width * 0.2,
    borderBottomEndRadius: METRICS.width * 0.06,
    borderBottomStartRadius: METRICS.width * 0.06,
  },
  uber: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: METRICS.width * 0.15,
    textAlign: 'center',
  },
  getThere: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: METRICS.width * 0.07,
    textAlign: 'center',
  },
  image: {
    width: METRICS.width >= 768 ? METRICS.width * 0.7 : METRICS.width,
    height: METRICS.width >= 768 ? METRICS.width * 0.6 : METRICS.width * 0.8,
    marginLeft: METRICS.width * 0.25,
    marginTop: METRICS.width * 0.1,
  },
});
