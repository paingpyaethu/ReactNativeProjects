import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {AxiosContext} from '../../../contexts/AxiosContext';
import {
  decreaseQty,
  increaseQty,
  removeSingleCartData,
  updateCart,
} from '../../../stores/slices/carts/cartSlice';
import {COLORS, FONTS, METRICS} from '../../../themes';

const CartItem = ({
  _id,
  productId,
  productName,
  productPrice,
  quantity,
  Stock,
}) => {
  const {authAxios} = useContext(AxiosContext);
  const cartData = useSelector(state => state.carts.cartData);

  const dispatch = useDispatch();

  const _decreaseQty = id => {
    dispatch(decreaseQty(id));

    let updQty = {
      quantity: quantity - 1,
    };

    dispatch(updateCart(id, updQty, authAxios));
  };

  const _increaseQty = id => {
    dispatch(increaseQty(id));

    let updQty = {
      quantity: quantity + 1,
    };

    dispatch(updateCart(id, updQty, authAxios));
  };

  // remove item from cart
  const _deleteSingleCartHandler = id => {
    Alert.alert('Warning!', 'Are you sure to delete this item?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => dispatch(removeSingleCartData(id, authAxios)),
      },
    ]);
  };

  return (
    <View style={styles.cartList}>
      {/* <Text>{productId}</Text> */}
      <Image
        source={{
          uri: 'https://rn-eshopcor.herokuapp.com/public/uploads/1667143362058.png',
        }}
        style={styles.image}
      />
      <View style={styles.itemCard}>
        <View style={styles.productNameContainer}>
          <Text style={styles.productName}>{productName}</Text>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => _deleteSingleCartHandler(_id)}>
            <IonIcons
              name="trash-outline"
              size={
                METRICS.width >= 768
                  ? METRICS.width * 0.04
                  : METRICS.width * 0.05
              }
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.logoTxt}>{'RN-Eshop'}</Text>

        {/* Price */}
        <View style={styles.productPriceContainer}>
          <Text style={styles.productPrice}>${productPrice * quantity}</Text>

          {/* quantity */}
          <View style={styles.quantityBox}>
            <TouchableOpacity
              disabled={quantity === 1}
              onPress={() => _decreaseQty(_id)}>
              <IonIcons
                name="remove-circle"
                size={
                  METRICS.width >= 768
                    ? METRICS.width * 0.04
                    : METRICS.width * 0.05
                }
                color={quantity === 1 ? COLORS.DEFAULT_GREY : COLORS.DARK_GREY}
              />
            </TouchableOpacity>
            <Text style={styles.quantityTxt}>{quantity}</Text>
            <TouchableOpacity
              disabled={quantity === Stock}
              onPress={() => _increaseQty(_id)}>
              <IonIcons
                name="add-circle"
                size={
                  METRICS.width >= 768
                    ? METRICS.width * 0.04
                    : METRICS.width * 0.05
                }
                color={
                  quantity === Stock ? COLORS.DEFAULT_GREY : COLORS.DARK_GREY
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartList: {
    width: METRICS.width * 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: METRICS.width * 0.14,
    paddingVertical: METRICS.width * 0.05,
  },
  itemCard: {
    backgroundColor: '#fff',
    width: METRICS.width - METRICS.width * 0.2,
    borderRadius: METRICS._scale(4),
    paddingLeft: METRICS.width * 0.15,
    paddingRight: METRICS.width * 0.03,
    paddingVertical: METRICS.width * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: METRICS.width * 0.2,
    height: METRICS.width * 0.2,
    position: 'absolute',
    top: 0,
    left: METRICS.width * 0.07,
    zIndex: 1,
  },
  productNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productName: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.035 : METRICS.width * 0.04,
    color: COLORS.SECONDARY_COLOR,
    marginBottom: METRICS._scale(5),
  },
  logoTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.02 : METRICS.width * 0.025,
    color: COLORS.DARK_GREY,
    marginBottom: METRICS._scale(5),
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.035 : METRICS.width * 0.04,
    color: COLORS.PRIMARY_COLOR,
  },
  quantityBox: {
    width: METRICS.width >= 768 ? METRICS.width * 0.23 : METRICS.width * 0.25,
    height: METRICS.width >= 768 ? METRICS.width * 0.07 : METRICS.width * 0.08,
    backgroundColor: '#fff',
    borderColor: COLORS.DEFAULT_GREY,
    borderWidth: METRICS._scale(1),
    borderRadius: METRICS._scale(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  quantityTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.035 : METRICS.width * 0.04,
    color: COLORS.SECONDARY_COLOR,
  },
  deleteBtn: {
    backgroundColor: COLORS.DEFAULT_RED,
    padding: METRICS.width * 0.01,
    borderRadius: METRICS.width * 0.01,
  },
});
