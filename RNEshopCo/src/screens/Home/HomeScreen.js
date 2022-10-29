/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import HeaderMenu from '../../components/molecules/Home/HeaderMenu';
import Banner from '../../components/molecules/Home/Banner';
import ProductList from '../../components/organisms/Home/ProductList';

import {COLORS, FONTS, METRICS} from '../../themes';

import {fetchProducts} from '../../stores/slices/products/productSlice';

const HomeScreen = ({navigation}) => {
  const products = useSelector(state => state.products.products);
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

  const _renderItem = ({item}) => {
    return <ProductList item={item} navigation={navigation} />;
  };

  const _listHeaderComponent = () => {
    return (
      <>
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
      <HeaderMenu navigation={navigation} />
      <Banner />
      {/* <Text>{JSON.stringify(products, null, 2)}</Text> */}
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
