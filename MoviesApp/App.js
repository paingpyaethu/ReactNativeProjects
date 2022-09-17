import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeScreen from './src/screens/HomeScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
export default App;
