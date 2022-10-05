import {SafeAreaView, View, StyleSheet} from 'react-native';
import React from 'react';
import ProductScreen from './src/screens/Products/ProductScreen';
import LogoHeader from './src/components/atoms/LogoHeader';

const App = () => {
  return (
    <View style={styles.container}>
      <LogoHeader />
      <ProductScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
