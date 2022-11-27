import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartTotal} from '../../../store/slices/carts/cartSlice';
import {COLORS, FONTS, METRICS, ROUTES} from '../../../themes';

const CartPopUp = () => {
  const items = useSelector(state => state.carts.cartData);
  const navigation = useNavigation();
  const cartTotal = useSelector(selectCartTotal);

  if (items.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => navigation.navigate(ROUTES.CART)}>
        <Text style={styles.itemsLength}>{items.length}</Text>
        <Text style={styles.viewCartTxt}>View Cart</Text>
        <Text style={styles.cartTotalTxt}>${cartTotal.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartPopUp;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: METRICS.width * 0.06,
    width: METRICS.width,
    zIndex: 50,
  },
  subContainer: {
    backgroundColor: COLORS.ACCENT,
    marginHorizontal: METRICS.width * 0.04,
    paddingVertical: METRICS.width * 0.02,
    paddingHorizontal: METRICS.width * 0.03,
    borderRadius: METRICS.width * 0.02,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemsLength: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.05,
    color: COLORS.NATURAL_LIGHT,
  },
  viewCartTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.045,
    color: COLORS.NATURAL_LIGHT,
  },
  cartTotalTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.05,
    color: COLORS.NATURAL_LIGHT,
  },
});
