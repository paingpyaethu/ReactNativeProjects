/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import HeaderMenu from '../../components/molecules/Home/HeaderMenu';
import Banner from '../../components/molecules/Home/Banner';
import ProductList from '../../components/organisms/Home/ProductList';

import {fetchProducts} from '../../stores/slices/products/productSlice';

const HomeScreen = ({navigation}) => {
  const products = useSelector(state => state.products);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      dispatch(fetchProducts());
    }
    return () => {
      mounted = true;
    };
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <HeaderMenu navigation={navigation} />
      <Banner />

      {/* <ProductList data={products} navigation={navigation} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
