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
import Metrics from '../../themes/Metrics';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';

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
          margin: Metrics._scale(15),
          backgroundColor: Colors.DEFAULT_RED,
          padding: Metrics._scale(10),
          borderRadius: Metrics._scale(5),
        }}>
        <Text
          style={{
            color: '#F8FCFF',
            textAlign: 'center',
            fontFamily: Fonts.ROBOTOSLAB_MEDIUM,
            fontSize: Metrics._scale(14),
            lineHeight: Metrics._scale(14 * 1.4),
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
    marginTop: Metrics._scale(10),
    fontSize: Metrics._scale(16),
    fontFamily: Fonts.ROBOTOSLAB_BOLD,
    color: Colors.DARK_GREY,
    textAlign: 'center',
  },
});

export default HomeScreen;
