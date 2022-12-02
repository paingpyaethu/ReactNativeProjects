import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS, METRICS} from '../../../../themes';

const PaymentInfo = ({
  cartData,
  userData,
  phoneNumber,
  address,
  countryName,
  cityName,
  placeOrderHandler,
}) => {
  const subTotal = cartData.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0,
  );

  const totalPay = subTotal + 5.7;
  return (
    <ScrollView
      style={{
        paddingTop: METRICS.width * 0.05,
      }}>
      <View>
        <Text style={styles.shippingAddressTxt}>Payment Info</Text>
        <View style={styles.shippingInfo}>
          <View style={styles.postalAddress}>
            <Text style={styles.postalAddressTxt}>Billing Address</Text>
            <MaterialIcons
              name="payments"
              size={METRICS.width * 0.07}
              color={COLORS.SECONDARY_COLOR}
            />
          </View>
          <Text style={styles.shippingInfoTxt}>Name: {userData.name}</Text>
          <Text style={styles.shippingInfoTxt}>Phone: {phoneNumber}</Text>
          <Text style={styles.shippingInfoTxt}>
            Address: {address}, {cityName}, {countryName}
          </Text>
        </View>

        <Text style={styles.shippingAddressTxt}>Payment Type</Text>
        <View style={styles.paymentCardContainer}>
          <View style={styles.paymentCard}>
            <FontAwesome
              name="cc-mastercard"
              size={METRICS.width * 0.1}
              color={COLORS.SECONDARY_COLOR}
            />

            <FontAwesome
              name="cc-paypal"
              size={METRICS.width * 0.1}
              color={COLORS.FOCUS_COLOR}
            />

            <FontAwesome
              name="cc-jcb"
              size={METRICS.width * 0.1}
              color={COLORS.DEFAULT_RED}
            />

            <FontAwesome
              name="cc-visa"
              size={METRICS.width * 0.1}
              color={COLORS.PRIMARY_COLOR}
            />
          </View>
        </View>

        <View style={styles.placeOrderContainer}>
          <View style={styles.row}>
            <Text style={styles.rowLabelTxt}>Sub - total</Text>
            <Text style={styles.rowPriceTxt}>${subTotal}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabelTxt}>Shipping</Text>
            <Text style={styles.rowPriceTxt}>Free</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabelTxt}>Sale tax</Text>
            <Text style={styles.rowPriceTxt}>$5.70</Text>
          </View>
          <View
            style={{
              borderTopWidth: METRICS.width * 0.001,
              borderTopColor: COLORS.DEFAULT_GREY,
            }}
          />
          <View style={styles.row}>
            <Text style={styles.totalPayTxt}>Total Pay</Text>
            <Text style={styles.totalPayPriceTxt}>${totalPay}</Text>
          </View>

          <TouchableOpacity
            onPress={placeOrderHandler}
            activeOpacity={0.7}
            style={styles.BtnWrapper}>
            <Text style={styles.BtnText}>Place Order</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.termConditions}>
          <Text style={styles.termConditionsTxt}>
            By placing your order you agree to our{' '}
            <Text style={{color: COLORS.PRIMARY_COLOR}}>
              terms and conditions, privacy and returns policies
            </Text>{' '}
            and consent to some of your data being stored by Ebuy which may be
            used to make future shopping experiences better for you.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({
  shippingAddressTxt: {
    color: COLORS.FOCUS_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.width * 0.043,
    textAlign: 'center',
    marginBottom: METRICS.width * 0.03,
  },
  shippingInfo: {
    backgroundColor: '#fff',
    paddingHorizontal: METRICS.width * 0.034,
    marginHorizontal: METRICS.width * 0.03,
    marginBottom: METRICS.width * 0.03,
    borderRadius: METRICS.width * 0.012,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  postalAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: METRICS.width * 0.001,
    marginBottom: METRICS.width * 0.03,
  },
  postalAddressTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.width * 0.042,
    marginVertical: METRICS.width * 0.03,
  },
  shippingInfoTxt: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.width * 0.035,
    marginBottom: METRICS.width * 0.03,
  },

  paymentCardContainer: {
    backgroundColor: '#fff',
    padding: METRICS.width * 0.034,
    marginHorizontal: METRICS.width * 0.03,
    marginBottom: METRICS.width * 0.05,

    borderRadius: METRICS.width * 0.012,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  placeOrderContainer: {
    backgroundColor: '#fff',
    marginVertical: METRICS.width * 0.035,
    marginHorizontal: METRICS.width * 0.03,
    paddingVertical: METRICS.width * 0.04,

    borderRadius: METRICS.width * 0.012,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: METRICS.width * 0.03,
    paddingHorizontal: METRICS.width * 0.04,
  },
  rowLabelTxt: {
    color: COLORS.DEFAULT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.035,
  },
  rowPriceTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.035,
  },
  totalPayTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.04,
    marginTop: METRICS.width * 0.03,
  },
  totalPayPriceTxt: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.05,
    marginTop: METRICS.width * 0.03,
  },
  BtnWrapper: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: METRICS.width * 0.02,
    height: METRICS.width * 0.11,
    marginHorizontal: METRICS.width * 0.2,
    marginTop: METRICS.width * 0.04,

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
  termConditions: {
    paddingHorizontal: METRICS.width * 0.03,
    marginBottom: METRICS.width * 0.1,
  },
  termConditionsTxt: {
    color: COLORS.DEFAULT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.034,
  },
});
