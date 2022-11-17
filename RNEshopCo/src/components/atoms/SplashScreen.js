import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import LottieView from 'lottie-react-native';

import {COLORS, METRICS} from '../../themes';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo/logo.png')}
        style={styles.image}
      />
      <LottieView
        source={require('../../assets/images/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: COLORS.LIGHT_GREY,
  },
  loader: {
    width: METRICS._scale(200),
    position: 'absolute',
    bottom: 50,
  },
});
