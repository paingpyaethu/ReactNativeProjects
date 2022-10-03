/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import ProductList from './ProductList';

const data = require('../../../assets/data/products.json');
var {width} = Dimensions.get('window');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <View style={{flex: 1, marginTop: -width / 26}}>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({item}) => <ProductList key={item.id} item={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default ProductContainer;
