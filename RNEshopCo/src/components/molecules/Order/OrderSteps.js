import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, METRICS} from '../../../themes';

const OrderSteps = ({activeTab}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.orderTxt}>Pending Order</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.orderTxt}>Past Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSteps;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: METRICS.width * 0.1,
  },
  orderTxt: {
    color: COLORS.DEFAULT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.035,
  },
});
