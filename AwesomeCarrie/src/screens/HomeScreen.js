import React from 'react';
import {StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Home from '../components/organisms/Home';
import {COLORS, METRICS} from '../themes';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DEFAULT_BLACK}}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={[COLORS.PRIMARY_COLOR, COLORS.SECONDARY_COLOR]}
        style={styles.container}>
        <Home />
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:
      Platform.OS === 'ios' ? METRICS.width * 0.13 : StatusBar.currentHeight,
  },
});
