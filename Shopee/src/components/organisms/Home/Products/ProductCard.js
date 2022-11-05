import React, {useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';

import {useDispatch} from 'react-redux';

import {addToCart} from '../../../../store/redux/actions/CartAction';
import {COLORS, FONTS, METRICS} from '../../../../theme';

const ProductCard = ({product, navigation}) => {
  const dispatch = useDispatch();

  const _addToCartHandler = value => {
    dispatch(addToCart(value));
    Toast.show({
      topOffset: METRICS._scale(60),
      type: 'success',
      text1: `${product.name} added to cart!`,
      text2: 'Go to your cart to complete order.',
    });
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
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => _addToCartHandler(product)}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.unavailable}>
            <Text style={styles.unavailableText}>Currently Unavailable</Text>
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
  unavailable: {
    backgroundColor: COLORS.DEFAULT_RED,
    paddingVertical: METRICS._scale(5),
    paddingHorizontal: METRICS._scale(10),
    borderRadius: METRICS._scale(5),
  },

  unavailableText: {
    fontSize: METRICS._scale(13),
    color: COLORS.YELLOW,
  },
  addBtn: {
    backgroundColor: COLORS.GREEN,
    paddingVertical: METRICS._scale(5),
    paddingHorizontal: METRICS._scale(10),
    borderRadius: METRICS._scale(5),
  },
  addBtnText: {
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    color: COLORS.LIGHT_GREY,
  },
});
// export default connect(null, mapDispatchToProps)(ProductCard);
export default React.memo(ProductCard);
