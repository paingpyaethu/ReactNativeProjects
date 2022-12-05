import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {COLORS, METRICS} from '../../../themes';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/images/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: COLORS.LIGHT_GREY,
  },
  loader: {
    width: METRICS.width * 0.4,
  },
});
