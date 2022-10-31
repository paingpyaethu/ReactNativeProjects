/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {addToCart} from '../../../../store/redux/actions/CartAction';
import {FONTS, METRICS} from '../../../../theme';

const ProductCard = ({product, navigation}) => {
  const dispatch = useDispatch();

  const _addToCartHandler = value => {
    dispatch(addToCart(value));
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {productDetail: product})
      }>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: product.image
              ? product.image
              : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
          }}
        />

        <Text style={styles.title}>
          {product.name.length > 15
            ? product.name.substring(0, 15 - 3) + '...'
            : product.name}
        </Text>

        <Text style={styles.price}>${product.price}</Text>

        {product.countInStock > 0 ? (
          <TouchableOpacity style={styles.addBtn} onPress={_addToCartHandler}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              backgroundColor: '#f85959',
              paddingVertical: METRICS._scale(5),
              paddingHorizontal: METRICS._scale(10),
              borderRadius: METRICS._scale(5),
            }}>
            <Text style={{fontSize: METRICS._scale(13), color: '#feff89'}}>
              Currently Unavailable
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch(addToCart({quantity: 1, product})),
  };
};

const styles = StyleSheet.create({
  container: {
    width: METRICS.width / 2 - METRICS._scale(11),
    height: METRICS._scale(190),
    padding: METRICS._scale(10),
    borderRadius: METRICS._scale(10),
    marginTop: METRICS._scale(53), //55
    marginBottom: METRICS._scale(10),
    marginLeft: (METRICS.width / 100) * 1.9,
    alignItems: 'center',
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    width: METRICS.width / 2 - METRICS._scale(34),
    height: METRICS.width / 2 - METRICS._scale(64),
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -METRICS._scale(44),
  },
  title: {
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
    fontFamily: FONTS.MONTSERRAT_BOLD,
    textAlign: 'center',

    marginTop: METRICS._scale(70),
  },
  price: {
    fontSize: METRICS._scale(18),
    lineHeight: METRICS._scale(18 * 1.4),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: 'orange',
    marginVertical: METRICS._scale(10),
  },
  addBtn: {
    backgroundColor: '#17b978',
    paddingVertical: METRICS._scale(5),
    paddingHorizontal: METRICS._scale(10),
    borderRadius: METRICS._scale(5),
  },
  addBtnText: {
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    color: '#fdfdfd',
  },
});
// export default connect(null, mapDispatchToProps)(ProductCard);
export default ProductCard;
