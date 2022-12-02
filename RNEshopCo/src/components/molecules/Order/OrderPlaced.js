import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, METRICS, ROUTES} from '../../../themes';

const OrderPlaced = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/images/order-placed-1.png')}
          resizeMode={'contain'}
          style={styles.image}
        />
        <Text style={styles.orderPlacedTxt}>Your Order Placed</Text>
        <Text style={styles.orderPlacedDescTxt}>
          Your order has been placed successfully. You can visit my order to
          check the delivery process.
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.ORDER)}
            activeOpacity={0.7}
            style={styles.BtnWrapper}>
            <Text style={styles.BtnText}>My Order</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.HOME)}
            activeOpacity={0.7}
            style={styles.BtnWrapper}>
            <Text style={styles.BtnText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: METRICS.height,
    justifyContent: 'space-between',
  },
  image: {
    width: METRICS.width,
    height: METRICS.width / 1.5,
  },
  orderPlacedTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.05,
    textAlign: 'center',
  },
  orderPlacedDescTxt: {
    color: COLORS.DEFAULT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.033,
    textAlign: 'center',

    paddingTop: METRICS.width * 0.03,
    paddingHorizontal: METRICS.width * 0.1,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BtnWrapper: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: METRICS.width * 0.02,
    height: METRICS.width * 0.11,
    marginHorizontal: METRICS.width * 0.03,
    marginBottom: 100,
    paddingHorizontal: METRICS.width * 0.03,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  BtnText: {
    color: COLORS.LIGHT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.04,
    lineHeight: METRICS.width * 0.11,
    textAlign: 'center',
  },
});
