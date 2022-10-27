import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {METRICS} from '../../themes';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>{METRICS.height}</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
