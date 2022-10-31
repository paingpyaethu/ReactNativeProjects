import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

//From Redux
import {clearCart, removeFromCart} from '../../store/redux/actions/CartAction';

import CartItem from '../../components/organisms/Cart/CartItem';

import {METRICS} from '../../theme';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems, shallowEqual);

  const _clearCartData = () => {
    dispatch(clearCart());
  };

  const _deleteHandler = item => {
    dispatch(removeFromCart(item));
  };

  let total = 0;
  cartItems.forEach(cart => {
    return (total += cart.price);
  });

  return (
    <>
      {cartItems.length > 0 ? (
        <View style={styles.container}>
          <Text style={styles.cartHeader}>My Shopping Cart</Text>
          <ScrollView>
            {cartItems.map(data => {
              return (
                <View key={Math.random()}>
                  <CartItem item={data} deleteHandler={_deleteHandler} />
                </View>
              );
            })}
          </ScrollView>

          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalPriceText}>${total}</Text>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.clearBtn} onPress={_clearCartData}>
              <Text style={styles.clearText}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkoutBtn}
              onPress={() => navigation.navigate('CheckoutScreen')}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.emptyCart}>
          <Image
            source={require('../../assets/img/empty-cart.png')}
            resizeMode="contain"
          />
        </View>
      )}
    </>
  );
};

// const mapStateToProps = state => {
//   const {cartItems} = state;
//   return {
//     cartItems: cartItems,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     clearCart: () => dispatch(clearCart()),
//   };
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartHeader: {
    alignSelf: 'center',
    fontSize: METRICS._scale(20),
    lineHeight: METRICS._scale(20 * 1.4),
    fontWeight: 'bold',
    marginBottom: METRICS._scale(10),
  },

  totalPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    margin: METRICS._scale(15),
  },
  totalText: {
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
    fontWeight: '500',
    color: '#3e3636',
  },
  totalPriceText: {
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
    fontWeight: '500',
    color: '#cb3b3b',
  },

  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: METRICS._scale(15),
  },
  clearBtn: {
    backgroundColor: '#ff5959',
    height: METRICS._scale(30),
    width: METRICS._scale(100),
    borderRadius: METRICS._scale(8),
  },
  clearText: {
    fontSize: METRICS._scale(14),
    color: '#fff',
    textAlign: 'center',
    lineHeight: METRICS._scale(30),
  },
  checkoutBtn: {
    backgroundColor: '#17b978',
    height: METRICS._scale(30),
    width: METRICS._scale(100),
    borderRadius: METRICS._scale(8),

    marginLeft: METRICS._scale(10),
  },
  checkoutText: {
    fontSize: METRICS._scale(14),
    color: '#fff',
    textAlign: 'center',
    lineHeight: METRICS._scale(30),
  },

  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
export default CartScreen;
