import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import Metrics from '../../theme/Metrics';
import {useOrientation} from '../../hooks/useOrientation';

const CartNoti = props => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);
  return (
    <>
      {props.cartItems.length ? (
        <View style={styles.badge}>
          <Text style={styles.text}>{props.cartItems.length}</Text>
        </View>
      ) : null}
    </>
  );
};

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};
export default connect(mapStateToProps)(CartNoti);

const customStyle = orientation =>
  StyleSheet.create({
    badge: {
      flex: 1,
      backgroundColor: '#17b978',
      width: Metrics._scale(20),
      height: Metrics._scale(20),
      borderRadius: Metrics._scale(20),

      position: 'absolute',
      top: -Metrics._scale(5),
      left: Metrics._scale(45),
      zIndex: 1,
    },
    text: {
      color: '#fff',
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(20),
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
