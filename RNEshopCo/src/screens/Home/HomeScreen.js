/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import HeaderMenu from '../../components/molecules/Home/HeaderMenu';
import Banner from '../../components/molecules/Home/Banner';
import ProductList from '../../components/organisms/Home/ProductList';

import {fetchProducts} from '../../stores/slices/products/productSlice';

import {BASE_URL} from '../../stores/api_endpoint';
import axios from 'axios';
import CategoryFilter from '../../components/organisms/Home/CategoryFilter';

const HomeScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      dispatch(fetchProducts());

      axios
        .get(`${BASE_URL}/categories`)
        .then(res => {
          setCategories(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });
    }
    return () => {
      mounted = true;
    };
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <HeaderMenu navigation={navigation} />
      <Banner />
      <CategoryFilter catData={categories} />

      <ProductList data={products} navigation={navigation} />
      {/* <Text>{JSON.stringify(products, null, 2)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
