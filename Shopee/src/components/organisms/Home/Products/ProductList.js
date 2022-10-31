import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({item, navigation}) => {
  return (
    <>
      <ProductCard product={item} navigation={navigation} />
    </>
  );
};

export default ProductList;
