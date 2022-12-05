import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../../molecules/Form/CustomInput';

import {COLORS, FONTS, METRICS} from '../../../../themes';

const ShippingInfo = ({
  address,
  phoneNumber,
  countryName,
  cityName,
  setAddress,
  setPhoneNumber,
  setCountryName,
  setCityName,
  shippingInfoHandler,
  error,
}) => {
  return (
    <KeyboardAwareScrollView
      // viewIsInsideTabBar={true}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.shippingInfo}>
        <Text style={styles.shippingInfoTxt}>Shipping Info</Text>

        <CustomInput
          label={'Address'}
          name={'address'}
          value={address}
          placeholder={'Enter your address'}
          onChangeText={text => setAddress(text)}
          error={error}
        />
        <CustomInput
          label={'Phone Number'}
          name={'phoneNumber'}
          value={phoneNumber}
          keyboardType="numeric"
          placeholder={'Enter your phone number'}
          onChangeText={text => setPhoneNumber(text)}
          error={error}
        />
        <CustomInput
          label={'City'}
          name={'cityName'}
          value={cityName}
          placeholder={'Enter your city'}
          onChangeText={text => setCityName(text)}
          error={error}
        />
        <CustomInput
          label={'Country'}
          name={'countryName'}
          value={countryName}
          placeholder={'Enter your country'}
          onChangeText={text => setCountryName(text)}
          error={error}
        />

        <TouchableOpacity
          onPress={shippingInfoHandler}
          activeOpacity={0.7}
          style={styles.BtnWrapper}>
          <Text style={styles.BtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ShippingInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shippingInfo: {
    paddingHorizontal: METRICS.width * 0.05,
    paddingVertical: METRICS.width * 0.04,
  },
  shippingInfoTxt: {
    color: COLORS.FOCUS_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.width * 0.053,
  },
  BtnWrapper: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    borderRadius: METRICS.width * 0.02,
    height: METRICS.width * 0.11,
    marginTop: METRICS._scale(16),

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
