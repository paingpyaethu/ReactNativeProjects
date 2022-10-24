/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Fonts from '../../../themes/Fonts';
import Metrics from '../../../themes/Metrics';
import ProductCard from '../../molecules/Home/ProductCard';

const ProductList = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(item.offerPrice, null, 2)}</Text> */}
      <ProductCard {...item} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.width,
    padding: Metrics._scale(10),
  },
});

export default ProductList;
