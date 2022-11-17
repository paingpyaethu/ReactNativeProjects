import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/molecules/Form/CustomInput';
import {COLORS, METRICS, FONTS} from '../../themes';

const ForgotPwdScreen = ({navigation}) => {
  const [forgot, setForgot] = useState('');

  const _handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <CustomInput
        label={'Forgot Password?'}
        name={'forgot'}
        value={forgot}
        placeholder={'Enter you email'}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.backBtnWrapper}>
          <Text style={styles.loginText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_handleSubmit}
          activeOpacity={0.7}
          style={styles.loginBtnWrapper}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPwdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    marginHorizontal: METRICS._scale(40),
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backBtnWrapper: {
    backgroundColor: COLORS.DEFAULT_GREY,
    borderRadius: METRICS._scale(10),
    height: METRICS._scale(40),
    width: METRICS._scale(100),

    marginTop: METRICS._scale(12),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  loginBtnWrapper: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: METRICS._scale(10),
    height: METRICS._scale(40),
    width: METRICS._scale(100),
    marginTop: METRICS._scale(12),
    marginLeft: METRICS._scale(8),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  loginText: {
    color: COLORS.LIGHT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS._scale(15),
    lineHeight: METRICS._scale(40),
    textAlign: 'center',
  },
});
