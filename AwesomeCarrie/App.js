import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <SplashScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
