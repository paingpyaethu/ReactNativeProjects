import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect, shallowEqual, useDispatch, useSelector} from 'react-redux';

import {METRICS} from '../../theme';

const CartNoti = props => {
  const cartItems = useSelector(state => state.cartItems, shallowEqual);
  return (
    <>
      {cartItems.length ? (
        <View style={styles.badge}>
          <Text style={styles.text}>{cartItems.length}</Text>
        </View>
      ) : null}
    </>
  );
};

export default CartNoti;

const styles = StyleSheet.create({
  badge: {
    flex: 1,
    backgroundColor: '#17b978',
    width: METRICS._scale(20),
    height: METRICS._scale(20),
    borderRadius: METRICS._scale(20),

    position: 'absolute',
    top: -METRICS._scale(5),
    left: METRICS._scale(45),
    zIndex: 1,
  },
  text: {
    color: '#fff',
    fontSize: METRICS._scale(12),
    lineHeight: METRICS._scale(20),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
