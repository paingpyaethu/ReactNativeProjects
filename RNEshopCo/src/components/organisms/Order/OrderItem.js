/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, METRICS} from '../../../themes';

const OrderItem = ({navigation, orderData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.myOrderContainer}>
        {/* My Orders Header */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IonIcons
            name="arrow-back-circle-outline"
            size={METRICS.width * 0.08}
            color={COLORS.FOCUS_COLOR}
          />
        </TouchableOpacity>
        <Text style={styles.myOrderTxt}>My Orders</Text>
        <View />
      </View>

      {/* Ordered Items */}
      {orderData.length > 0 ? (
        <ScrollView
          style={{
            marginBottom: METRICS.width * 0.2,
            paddingTop: METRICS.width * 0.03,
          }}>
          {orderData &&
            orderData.map(order =>
              order.orderItems.map(item => (
                <View style={styles.orderList} key={item._id}>
                  <Image
                    source={{
                      uri: 'https://rn-eshopcor.herokuapp.com/public/uploads/1667143362058.png',
                    }}
                    style={styles.image}
                  />
                  <View style={styles.orderItemCard}>
                    <View style={styles.orderNoContainer}>
                      <Text style={styles.orderNoTxt}>
                        Order No - #{item._id.substring(7, 0)}
                      </Text>
                      <View style={styles.orderStatusContainer}>
                        <IonIcons
                          name={
                            order.orderStatus === 'Processing'
                              ? 'reload-circle-outline'
                              : 'checkmark-circle-outline'
                          }
                          size={METRICS.width * 0.05}
                          color={
                            order.orderStatus === 'Processing'
                              ? COLORS.DEFAULT_YELLOW
                              : COLORS.DEFAULT_GREEN
                          }
                        />
                        <Text style={styles.orderStatusTxt}>
                          {order.orderStatus}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.dateTxt}>
                      {order.paidAt.replace('T', ' - ').substring(0, 18)}
                    </Text>
                    <View style={styles.productName}>
                      <Text style={styles.productNameTxt}>
                        {item.productName}
                      </Text>
                      <Text style={styles.priceTxt}>
                        {item.quantity}x {item.productPrice}
                      </Text>
                    </View>
                    <View style={{marginTop: METRICS.width * 0.01}}>
                      <View style={styles.footer}>
                        <Text style={styles.footerLabelTxt}>Sub Total</Text>
                        <Text style={styles.footerPriceTxt}>
                          ${item.quantity * item.productPrice}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )),
            )}
        </ScrollView>
      ) : (
        <View
          style={{
            height: METRICS.height / 1.3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.DEFAULT_RED,
              fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
              fontSize: METRICS.width * 0.04,
            }}>
            Your OrderList is empty!
          </Text>
        </View>
      )}
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    height: METRICS.height,
  },
  myOrderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: METRICS.width * 0.03,
    marginVertical: METRICS.width * 0.05,
  },
  myOrderTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.04,
  },
  image: {
    width: METRICS.width * 0.2,
    height: METRICS.width * 0.2,
    position: 'absolute',
    top: 0,
    left: METRICS.width * 0.07,
    zIndex: 1,
  },
  orderList: {
    paddingLeft: METRICS.width * 0.14,
    paddingVertical: METRICS.width * 0.05,
  },
  orderItemCard: {
    backgroundColor: '#fff',
    borderRadius: METRICS.width * 0.01,
    width: METRICS.width - METRICS.width * 0.2,
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
  orderNoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderNoTxt: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.032,
  },
  orderStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GREY,
    padding: METRICS.width * 0.013,
    borderRadius: METRICS.width * 0.01,
  },
  orderStatusTxt: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.035,
    marginLeft: METRICS.width * 0.005,
  },
  dateTxt: {
    color: COLORS.DEFAULT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.03,
    marginVertical: METRICS.width * 0.01,
  },
  productName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: METRICS.width * 0.02,
    borderBottomWidth: METRICS.width * 0.005,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  productNameTxt: {
    color: COLORS.DARK_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.035,
  },
  priceTxt: {
    color: COLORS.DEFAULT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.033,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: METRICS.width * 0.02,
  },
  footerLabelTxt: {
    color: COLORS.DEFAULT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.033,
  },
  footerPriceTxt: {
    color: COLORS.DARK_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.038,
  },
});
