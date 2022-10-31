import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {METRICS, COLORS, FONTS} from '../../../themes';
import ProductCard from '../../molecules/Home/ProductCard';

const ProductList = props => {
  const _renderComponent = ({item}) => (
    <ProductCard product={item} navigation={props.navigation} />
  );
  return (
    <View style={styles.productListContainer}>
      <FlatList
        data={props.data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderComponent}
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
});
