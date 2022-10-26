import React from 'react';
import {StyleSheet, View} from 'react-native';
import {METRICS} from '../../../themes';
import ProductCard from '../../molecules/Home/ProductCard';

const ProductList = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      <ProductCard product={item} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: METRICS.width,
    padding: METRICS._scale(10),
  },
});

export default ProductList;
