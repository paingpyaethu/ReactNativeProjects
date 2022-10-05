import {SafeAreaView, View, StyleSheet} from 'react-native';
import React from 'react';
import LogoHeader from './src/components/atoms/LogoHeader';
import HomeScreen from './src/screens/Home/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <LogoHeader />
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cabbe9',
  },
});
export default App;
