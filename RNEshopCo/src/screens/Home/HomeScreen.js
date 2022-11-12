/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import HeaderMenu from '../../components/molecules/Home/HeaderMenu';
import Banner from '../../components/molecules/Home/Banner';
import ProductList from '../../components/organisms/Home/ProductList';
import {getAllProducts} from '../../stores/slices/products/productSlice';

const HomeScreen = ({navigation}) => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      dispatch(getAllProducts());
    }
    return () => {
      mounted = true;
    };
  }, [dispatch]);

  return (
    <>
      {products.isLoading === false ? (
        <View style={styles.container}>
          <HeaderMenu navigation={navigation} />
          <Banner />

          <ProductList data={products.products} navigation={navigation} />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: '#f2f2f2',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
