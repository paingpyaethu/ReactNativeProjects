/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

import {METRICS} from '../../theme';

import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/redux/actions/CartAction';

const ProductDetailScreen = ({route, navigation}) => {
  const {productDetail} = route.params;

  const dispatch = useDispatch();

  const _addToCartHandler = value => {
    dispatch(addToCart(value));
    Toast.show({
      topOffset: METRICS._scale(60),
      type: 'success',
      text1: `${productDetail.name} added to cart!`,
      text2: 'Go to your cart to complete order.',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={METRICS._scale(28)}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '90%',
            alignItems: 'center',
          }}>
          <Text style={styles.headerText}>ProductDetail</Text>
        </View>
      </View>

      <ScrollView>
        <Image
          source={{
            uri: productDetail.image
              ? productDetail.image
              : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.contentHeader}>{productDetail.name}</Text>
          <Text style={styles.contentText}>
            {productDetail.brand.toUpperCase()}
          </Text>
        </View>
        <Text>{productDetail.description}</Text>

        <View style={{height: METRICS._scale(30)}} />
        {/* TODO: Description, Rish Description and Availability */}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Text style={styles.price}>$ {productDetail.price}</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => _addToCartHandler(productDetail)}>
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: METRICS._scale(15),
  },
  headerText: {
    fontSize: METRICS._scale(18),
    fontWeight: '600',
  },
  image: {
    width: METRICS.width,
    height: METRICS.height / 3,
  },
  contentContainer: {
    marginTop: METRICS._scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentHeader: {
    fontWeight: 'bold',
    fontSize: METRICS._scale(24),
    marginBottom: METRICS._scale(14),
  },
  contentText: {
    fontWeight: '600',
    fontSize: METRICS._scale(16),
    marginBottom: METRICS._scale(14),
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: METRICS._scale(15),
    marginBottom: METRICS._scale(5),
  },
  price: {
    fontSize: METRICS._scale(18),
    fontWeight: '500',
    color: '#cb3b3b',
  },
  addBtn: {
    backgroundColor: '#17b978',
    paddingVertical: METRICS._scale(10),
    paddingHorizontal: METRICS._scale(30),
    borderRadius: METRICS._scale(5),
  },
  addBtnText: {
    fontSize: METRICS._scale(14),
    fontWeight: '600',
    color: '#fdfdfd',
  },
});
