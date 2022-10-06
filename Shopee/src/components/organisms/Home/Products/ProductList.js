import React from 'react';
import {TouchableOpacity} from 'react-native';
import ProductCard from './ProductCard';

const ProductList = props => {
  const {item} = props;

  const _productDetailHandler = () => {
    props.navigation.navigate('ProductDetail', {productData: item});
  };
  return (
    <TouchableOpacity onPress={_productDetailHandler}>
      <ProductCard {...item} />
    </TouchableOpacity>
  );
};

export default ProductList;
