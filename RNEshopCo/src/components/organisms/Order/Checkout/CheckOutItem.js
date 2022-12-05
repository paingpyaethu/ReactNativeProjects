/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {AxiosContext} from '../../../../contexts/AxiosContext';
import {saveOrders} from '../../../../stores/slices/orders/orderSlice';
import {COLORS, FONTS, METRICS} from '../../../../themes';
import OrderPlaced from '../../../molecules/Order/OrderPlaced';
import Confirmation from './Confirmation';
import PaymentInfo from './PaymentInfo';
import ShippingInfo from './ShippingInfo';
import CheckoutSteps from '../../../molecules/Order/CheckoutSteps';

const CheckOutItem = ({navigation}) => {
  const {authAxios} = useContext(AxiosContext);
  const {userData} = useSelector(state => state.users);
  const {cartData} = useSelector(state => state.carts);
  const {isLoading} = useSelector(state => state.orders);
  const dispatch = useDispatch();

  const [active, setActive] = useState(1);
  const [success, setSuccess] = useState(false);

  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [subtotal, setSubTotal] = useState(0);

  const totalPrice = cartData.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0,
  );

  const taxPrice = totalPrice > 1000 ? totalPrice * 0.01 : totalPrice * 0.02;
  const shippingPrice = totalPrice > 1000 ? 0 : totalPrice * 0.04;

  const customValidator = (data, errMsg) => {
    if (!data) {
      return errMsg;
    }
  };
  const _shippingInfoHandler = () => {
    let isValid = true;

    if (!address || !phoneNumber || !cityName || !countryName) {
      customValidator(errMsg, setErrMsg('Please fill out all field.'));
      isValid = false;
    }

    if (isValid) {
      customValidator(errMsg, setErrMsg(null));
      setActive(2);
    }
  };

  const _confirmOrderHandler = () => {
    if (cartData.length > 0) {
      setActive(3);
    }
  };

  const order = {
    shippingInfo: {
      address,
      city: cityName,
      country: countryName,
      phoneNo: phoneNumber,
    },
    orderItems: cartData,
    itemsPrice: subtotal,
    taxPrice: taxPrice,
    shippingPrice: shippingPrice,
    totalPrice: totalPrice,
    paymentInfo: {
      id: Math.random(),
      status: 'success',
      paymentPrice: totalPrice + taxPrice + shippingPrice,
    },
  };

  const _placeOrderHandler = () => {
    dispatch(saveOrders(order, authAxios));

    setTimeout(() => {
      setSuccess(true);
    }, 1500);
  };
  return (
    <View style={styles.container}>
      {success === true ? (
        <OrderPlaced navigation={navigation} />
      ) : (
        <>
          <View style={styles.checkoutContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IonIcons
                name="arrow-back-circle-outline"
                size={METRICS.width * 0.08}
                color={COLORS.FOCUS_COLOR}
              />
            </TouchableOpacity>
            <Text style={styles.checkoutTxt}>Check Out</Text>
            <View />
          </View>
          <CheckoutSteps activeTab={active} />
          {active === 1 ? (
            <ShippingInfo
              address={address}
              phoneNumber={phoneNumber}
              cityName={cityName}
              countryName={countryName}
              setAddress={setAddress}
              setPhoneNumber={setPhoneNumber}
              setCityName={setCityName}
              setCountryName={setCountryName}
              shippingInfoHandler={_shippingInfoHandler}
              error={errMsg}
            />
          ) : active === 2 ? (
            <Confirmation
              cartData={cartData}
              userData={userData}
              phoneNumber={phoneNumber}
              address={address}
              countryName={countryName}
              cityName={cityName}
              confirmOrderHandler={_confirmOrderHandler}
            />
          ) : active === 3 ? (
            <PaymentInfo
              cartData={cartData}
              userData={userData}
              phoneNumber={phoneNumber}
              address={address}
              countryName={countryName}
              cityName={cityName}
              placeOrderHandler={_placeOrderHandler}
              isLoading={isLoading}
            />
          ) : null}
        </>
      )}
    </View>
  );
};

export default CheckOutItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: METRICS.width * 0.03,
    marginVertical: METRICS.width * 0.05,
  },
  checkoutTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.04,
  },
});
