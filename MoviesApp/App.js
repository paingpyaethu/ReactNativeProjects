import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Home from './src/screens/Home';
const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
export default App;
