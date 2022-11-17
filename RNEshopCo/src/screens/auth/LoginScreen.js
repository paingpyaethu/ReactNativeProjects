import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS, FONTS, METRICS, ROUTES} from '../../themes';
import CustomInput from '../../components/molecules/Form/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../stores/slices/auth/authSlice';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _handleSubmit = () => {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
  };

  return (
    <>
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.main}>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.row}>
              <Image
                source={require('../../assets/images/logo/logo.png')}
                style={styles.logo}
              />
            </View>
            <Text style={styles.loginContinueTxt}>Login to continue</Text>

            <CustomInput
              label={'Email'}
              iconName={'mail-open-outline'}
              name={'email'}
              value={email}
              keyboardType={'email-address'}
              onChangeText={text => setEmail(text.toLowerCase())}
              error={auth.loginError}
            />
            <CustomInput
              label={'Password'}
              iconName={'lock-closed-outline'}
              name={'password'}
              value={password}
              onChangeText={text => setPassword(text)}
              error={auth.loginError}
              password
            />
            {/******************** LOGIN BUTTON *********************/}
            <TouchableOpacity
              onPress={_handleSubmit}
              activeOpacity={0.7}
              style={styles.loginBtnWrapper}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            {/***************** FORGOT PASSWORD BUTTON *****************/}
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
              <Text style={styles.forgotPassText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}> Don't have an account? </Text>
            {/******************** REGISTER BUTTON *********************/}
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.REGISTER)}>
              <Text style={styles.signupBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    height: METRICS.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: METRICS._scale(15),
    width: METRICS.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: METRICS._scale(150),
    height: METRICS._scale(100),
  },
  loginContinueTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS._scale(20),
    lineHeight: METRICS._scale(20 * 1.4),
    color: COLORS.SECONDARY_COLOR,
    textAlign: 'center',
    marginBottom: METRICS._scale(15),
  },
  // Login Btn Styles
  loginBtnWrapper: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: METRICS._scale(20),
    height: METRICS._scale(40),
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
  loginText: {
    color: COLORS.LIGHT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS._scale(15),
    lineHeight: METRICS._scale(40),
    textAlign: 'center',
  },
  forgotPassText: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS._scale(13),
    color: COLORS.PRIMARY_COLOR,
    textAlign: 'center',
    marginVertical: METRICS._scale(13),
  },
  // footer
  footer: {
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.DARK_GREY,
    fontFamily: FONTS.ROBOTOSLAB_BOLD,
    fontSize: METRICS._scale(12),
    lineHeight: METRICS._scale(12 * 1.4),
    letterSpacing: METRICS._scale(0.5),
  },
  signupBtn: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_BOLD,
    fontSize: METRICS._scale(12),
    lineHeight: METRICS._scale(12 * 1.4),
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: METRICS._scale(15),
  },
});
