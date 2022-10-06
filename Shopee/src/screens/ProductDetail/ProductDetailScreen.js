import {View, Text} from 'react-native';
import React from 'react';

const ProductDetailScreen = ({route}) => {
  const {productData} = route.params;
  //   console.log(productData);

  return (
    <View>
      <Text>ProductDetailScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;
