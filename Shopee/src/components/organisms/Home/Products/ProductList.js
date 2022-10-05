/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ProductCard from './ProductCard';

const ProductList = props => {
  const {item} = props;
  return (
    <View>
      <ProductCard {...item} />
    </View>
  );
};

export default ProductList;
