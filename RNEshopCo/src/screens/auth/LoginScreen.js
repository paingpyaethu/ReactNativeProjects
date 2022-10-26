import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, METRICS, ROUTES} from '../../themes';

const LoginScreen = props => {
  // const {navigation} = props;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/logo/logo.png')}
              style={styles.logo}
            />
          </View>

          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.DEFAULT_GREY}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={COLORS.DEFAULT_GREY}
            secureTextEntry
          />

          {/******************** LOGIN BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.HOME)}
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
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    padding: METRICS._scale(15),
    width: METRICS.width,
    position: 'relative',
    flex: 1,
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
  input: {
    borderWidth: 1,
    borderColor: COLORS.DEFAULT_GREY,
    padding: METRICS._scale(15),
    marginVertical: METRICS._scale(10),
    borderRadius: METRICS._scale(6),
    height: METRICS._scale(50),
    paddingVertical: 0,

    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
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
    marginTop: METRICS._scale(13),
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: METRICS._scale(20),
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
