/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import ProductCard from './ProductCard';

const ProductList = props => {
  const {item} = props;
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'gainsboro'}}>
        <ProductCard {...item} />
      </View>
    </View>
  );
};

export default ProductList;
