/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import axios from 'axios';

import HeaderMenu from '../../components/molecules/Home/HeaderMenu';
import Banner from '../../components/molecules/Home/Banner';
import ProductList from '../../components/organisms/Home/ProductList';

import {getAllProducts} from '../../stores/redux/products/productSlice';
import {BASE_URL} from '../../stores/api_endpoint';

import {COLORS, FONTS, METRICS} from '../../themes';

const HomeScreen = ({navigation}) => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const axiosRequest = axios.create({
    baseURL: BASE_URL,
  });
  useEffect(() => {
    let unsubscribed = false;
    if (!unsubscribed) {
      dispatch(getAllProducts(axiosRequest));
    }
    return () => {
      unsubscribed = true;
    };
  }, []);

  const _renderItem = ({item}) => {
    return <ProductList item={item} navigation={navigation} />;
  };

  const _listHeaderComponent = () => {
    return (
      <>
        <Banner />
        <Text style={styles.listHeaderText}>New Trends</Text>
      </>
    );
  };
  const _listEmptyComponent = () => {
    return (
      <View
        style={{
          margin: METRICS._scale(15),
          backgroundColor: COLORS.DEFAULT_RED,
          padding: METRICS._scale(10),
          borderRadius: METRICS._scale(5),
        }}>
        <Text
          style={{
            color: '#F8FCFF',
            textAlign: 'center',
            fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
            fontSize: METRICS._scale(14),
            lineHeight: METRICS._scale(14 * 1.4),
          }}>
          {'No Products Found!'}
        </Text>
      </View>
    );
  };
  const _keyExtractor = item => item._id;
  return (
    <View style={styles.container}>
      <HeaderMenu />
      <FlatList
        numColumns={2}
        data={products}
        renderItem={_renderItem}
        ListHeaderComponent={_listHeaderComponent}
        ListEmptyComponent={_listEmptyComponent}
        keyExtractor={_keyExtractor}
      />
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
