import React, {useEffect, useCallback} from 'react';
import ProductCard from './ProductCard';

const ProductList = ({item, navigation}) => {
  // useCallback(() => {
  //   console.log('ProductList Render.');
  // }, []);

  return (
    <>
      <ProductCard product={item} navigation={navigation} />
    </>
  );
};

export default React.memo(ProductList);
