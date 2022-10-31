/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import HeaderMenu from '../../components/molecules/Home/HeaderMenu';
import Banner from '../../components/molecules/Home/Banner';
import ProductList from '../../components/organisms/Home/ProductList';

import {COLORS, FONTS, METRICS, ROUTES} from '../../themes';

import {fetchProducts} from '../../stores/slices/products/productSlice';

const HomeScreen = ({navigation}) => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchProducts());

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

      <ProductList data={products} navigation={navigation} />
      {/* <Text>{JSON.stringify(products, null, 2)}</Text> */}
      {/* <FlatList
        numColumns={2}
        data={products}
        renderItem={_renderItem}
        ListHeaderComponent={_listHeaderComponent}
        ListEmptyComponent={_listEmptyComponent}
        keyExtractor={_keyExtractor}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeaderText: {
    marginTop: METRICS._scale(10),
    fontSize: METRICS._scale(16),
    fontFamily: FONTS.ROBOTOSLAB_BOLD,
    color: COLORS.DARK_GREY,
    textAlign: 'center',
  },
});

export default HomeScreen;
