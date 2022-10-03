import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import ProductContainer from './src/screens/Products/ProductContainer';
import Header from './src/shared/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
