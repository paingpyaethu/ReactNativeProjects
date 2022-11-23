/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import {METRICS, COLORS, FONTS} from '../../../themes';
import ProductCard from '../../molecules/Home/ProductCard';

const ProductList = ({data, navigation, wishlistData}) => {
  const _renderComponent = ({item}) => (
    <ProductCard
      product={item}
      navigation={navigation}
      wishlistData={wishlistData}
    />
  );
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

  return (
    <View style={styles.productListContainer}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderComponent}
        ListHeaderComponent={_listHeaderComponent}
        ListEmptyComponent={_listEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  productListContainer: {
    flex: 1,
    width: METRICS.width,
  },
  listHeaderText: {
    marginTop: METRICS._scale(18),
    fontSize: METRICS.height / 40,
    fontFamily: FONTS.ROBOTOSLAB_BOLD,
    color: COLORS.DARK_GREY,
    textAlign: 'center',
  },
});
