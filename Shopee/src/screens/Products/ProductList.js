/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Dimensions} from 'react-native';
import ProductCard from './ProductCard';

var {width} = Dimensions.get('window');
const ProductList = props => {
  const {item} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'gainsboro'}}>
        <ProductCard {...item} />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
