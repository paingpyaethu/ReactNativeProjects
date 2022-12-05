import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, METRICS} from '../../../../themes';

const Confirmation = ({
  cartData,
  userData,
  phoneNumber,
  address,
  countryName,
  cityName,
  confirmOrderHandler,
}) => {
  return (
    <ScrollView
      style={{
        paddingTop: METRICS.width * 0.05,
      }}>
      <View style={{paddingBottom: METRICS.width * 0.1}}>
        <Text style={styles.shippingAddressTxt}>Your Shipping Address</Text>
        <View style={styles.shippingInfo}>
          <View style={styles.postalAddress}>
            <Text style={styles.postalAddressTxt}>Postal Address</Text>
            <IonIcons
              name="map-outline"
              size={METRICS.width * 0.05}
              color={COLORS.SECONDARY_COLOR}
            />
          </View>
          <Text style={styles.shippingInfoTxt}>Name: {userData.name}</Text>
          <Text style={styles.shippingInfoTxt}>Phone: {phoneNumber}</Text>
          <Text style={styles.shippingInfoTxt}>
            Address: {address}, {cityName}, {countryName}
          </Text>
        </View>
        <Text style={styles.cartItemTxt}>Your Cart Items</Text>

        {cartData.map(item => {
          return (
            <View style={styles.cartItem} key={item._id}>
              <View style={styles.productNameImage}>
                <Image
                  source={{
                    uri: item.productImage,
                  }}
                  style={styles.image}
                />
                <Text style={styles.productNameTxt}>{item.productName}</Text>
              </View>
              <Text style={styles.priceTxt}>
                {item.quantity}x ${item.productPrice} = $
                {item.quantity * item.productPrice}
              </Text>
            </View>
          );
        })}
        <View
          style={{
            borderBottomWidth: METRICS.width * 0.005,
            marginTop: METRICS.width * 0.03,
            borderBottomColor: COLORS.NORMAL_GREY,
          }}
        />
        <View style={styles.totalPrice}>
          <Text style={styles.totalPriceLabel}>Total Price :</Text>
          <Text style={styles.totalPriceTxt}>
            $
            {cartData.reduce(
              (total, item) => total + item.productPrice * item.quantity,
              0,
            )}
          </Text>
        </View>

        <TouchableOpacity
          onPress={confirmOrderHandler}
          activeOpacity={0.7}
          style={styles.BtnWrapper}>
          <Text style={styles.BtnText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Confirmation;

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
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: METRICS.width * 0.03,
  },
  cartItemTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.width * 0.04,
    marginVertical: METRICS.width * 0.03,
    paddingTop: METRICS.width * 0.03,
    textAlign: 'center',

    borderTopWidth: METRICS.width * 0.005,
    borderTopColor: COLORS.NORMAL_GREY,
  },

  productNameImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: METRICS.width * 0.1,
    height: METRICS.width * 0.1,
  },
  productNameTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.033,
    marginLeft: METRICS.width * 0.03,
  },
  priceTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.033,
  },

  totalPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: METRICS.width * 0.05,
    marginHorizontal: METRICS.width * 0.03,
  },
  totalPriceLabel: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.042,
  },
  totalPriceTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.042,
  },

  BtnWrapper: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    borderRadius: METRICS.width * 0.02,
    height: METRICS.width * 0.11,
    marginTop: METRICS.width * 0.1,
    marginHorizontal: METRICS.width * 0.2,

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
