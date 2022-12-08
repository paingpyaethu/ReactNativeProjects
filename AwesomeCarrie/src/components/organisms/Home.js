import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, METRICS} from '../../themes';
import NavOptions from '../molecules/Home/NavOptions';

const Home = () => {
  return (
    <View>
      <Text style={styles.carrieTxt}>Carrie</Text>
      <NavOptions />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  carrieTxt: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: METRICS.width * 0.06,
    fontWeight: '600',
  },
});
