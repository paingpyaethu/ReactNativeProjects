import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Banner from './src/components/molecules/Home/Banner';
import HeaderMenu from './src/components/molecules/Home/HeaderMenu';
import HomeScreen from './src/screens/Home/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <HeaderMenu />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
