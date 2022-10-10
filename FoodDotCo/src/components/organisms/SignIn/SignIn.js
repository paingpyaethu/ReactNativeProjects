import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useOrientation} from '../../../hooks/useOrientation';
import Colors from '../../../theme/Colors';
import Separator from '../../atoms/Separator';
import Metrics from '../../../theme/Metrics';
import Fonts from '../../../theme/Fonts';
import Images from '../../../theme/Images';
import ToogleButton from '../../atoms/ToogleButton';
import CustomButton from '../../molecules/WelcomeButtons/CustomButton';

const SignIn = props => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);

  const [isPwdShow, SetIsPwdShow] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {/* HeaderSignIn */}
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back"
          size={Metrics._scale(30)}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Sign In</Text>
      </View>

      {/* Welcome HeaderTitle */}
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>
        Enter your username and password for sign in and enjoy your food.
      </Text>

      {/* InputContainer */}
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={Metrics._scale(18)}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: Metrics._scale(10)}}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={Metrics._scale(18)}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: Metrics._scale(10)}}
          />
          <TextInput
            secureTextEntry={isPwdShow ? false : true}
            placeholder="Password"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
          <Feather
            name={isPwdShow ? 'eye' : 'eye-off'}
            size={Metrics._scale(18)}
            color={Colors.DEFAULT_GREY}
            style={{marginLeft: Metrics._scale(10)}}
            onPress={() => SetIsPwdShow(!isPwdShow)}
          />
        </View>
      </View>

      <Text />

      {/* Forgot Password / Remember Me */}
      <View style={styles.forgotPwdContainer}>
        <View style={styles.toggleContainer}>
          <ToogleButton size={1} />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </View>
        <Text style={styles.forgotPwdText} onPress={props.forgotPwd}>
          Forgot Password!
        </Text>
      </View>

      {/* Sigin Button */}
      <CustomButton
        btnText="Sign In"
        btn={styles.signInBtn}
        btnTextDesign={styles.signInBtnText}
      />

      <View style={styles.signUpContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text style={styles.signUpText} onPress={props.authToggleHandler}>
          Sign Up
        </Text>
      </View>
      <Text style={styles.orText}>OR</Text>

      {/* Social Buttons */}
      <TouchableOpacity style={styles.facebookBtn}>
        <View style={styles.socialBtnContainer}>
          <View style={styles.socialBtnLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.socialBtnLogo} />
          </View>
          <Text style={styles.socialBtnText}>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
        <View style={styles.socialBtnContainer}>
          <View style={styles.socialBtnLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.socialBtnLogo} />
          </View>
          <Text style={styles.socialBtnText}>Connect with Google</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Metrics._scale(10),
      paddingHorizontal: Metrics._scale(10),
    },
    headerTitle: {
      fontSize: Metrics._scale(20),
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: Metrics._scale(20 * 1.4),
      width: (orientation.width / 100) * 80,
      textAlign: 'center',
    },

    //*** Welcome Header Title ***//
    title: {
      fontSize: Metrics._scale(18),
      fontFamily: Fonts.POPPINS_MEDIUM,
      marginTop: Metrics._scale(10),
      marginBottom: Metrics._scale(10),
      marginHorizontal: Metrics._scale(20),
    },
    content: {
      fontSize: Metrics._scale(13),
      fontFamily: Fonts.POPPINS_REGULAR,
      marginBottom: Metrics._scale(20),
      marginHorizontal: Metrics._scale(20),
      color: Colors.DARK_THREE,
    },

    //*** Input Containers ***//
    inputContainer: {
      backgroundColor: Colors.LIGHT_GREY,
      paddingHorizontal: Metrics._scale(10),
      marginHorizontal: Metrics._scale(20),
      borderRadius: Metrics._scale(8),
      borderWidth: 1,
      borderColor: Colors.INACTIVE_GREY,
      justifyContent: 'center',
    },
    inputSubContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputText: {
      flex: 1,
      fontSize: Metrics._scale(15),
      textAlignVertical: 'center',
      padding: 0,
      height: (orientation.height / 100) * 5,
      color: Colors.DEFAULT_BLACK,
    },

    //*** Forgot Password ***//
    forgotPwdContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: Metrics._scale(20),
    },
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rememberMeText: {
      marginLeft: Metrics._scale(5),
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(12 * 1.4),
      color: Colors.DEFAULT_GREY,
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
    forgotPwdText: {
      fontSize: Metrics._scale(10),
      lineHeight: Metrics._scale(10 * 1.4),
      color: Colors.PRIMARY_COLOR,
      fontFamily: Fonts.POPPINS_BOLD,
    },
    //*** SignIn Button ***//
    signInBtn: {
      backgroundColor: Colors.PRIMARY_COLOR,
      paddingVertical: Metrics._scale(8),
      paddingHorizontal: Metrics._scale(30),
      marginHorizontal: Metrics._scale(20),
      marginTop: Metrics._scale(18),
      borderRadius: Metrics._scale(8),

      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    signInBtnText: {
      fontSize: Metrics._scale(16),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_WHITE,
      lineHeight: Metrics._scale(16 * 1.4),
    },
    //*** SignUpContainer ***//
    signUpContainer: {
      marginHorizontal: Metrics._scale(20),
      paddingVertical: Metrics._scale(10),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    accountText: {
      fontSize: Metrics._scale(13),
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: Metrics._scale(13 * 1.4),
    },
    signUpText: {
      fontSize: Metrics._scale(13),
      color: Colors.PRIMARY_COLOR,
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: Metrics._scale(13 * 1.4),
      marginLeft: Metrics._scale(5),
    },
    orText: {
      fontSize: Metrics._scale(15),
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: Metrics._scale(15 * 1.4),
      marginLeft: Metrics._scale(5),
      alignSelf: 'center',
    },
    //*** Facebook and Google Buttons ***//
    facebookBtn: {
      backgroundColor: Colors.FABEBOOK_BLUE,
      paddingVertical: Metrics._scale(15),
      marginHorizontal: Metrics._scale(20),
      marginTop: Metrics._scale(10),
      marginBottom: Metrics._scale(20),
      borderRadius: Metrics._scale(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    googleBtn: {
      backgroundColor: Colors.GOOGLE_BLUE,
      paddingVertical: Metrics._scale(15),
      marginHorizontal: Metrics._scale(20),
      borderRadius: Metrics._scale(8),
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialBtnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    socialBtnLogoContainer: {
      backgroundColor: Colors.DEFAULT_WHITE,
      padding: 2,
      borderRadius: 3,
      position: 'absolute',
      left: Metrics._scale(25),
    },
    socialBtnLogo: {
      width: Metrics._scale(18),
      height: Metrics._scale(18),
    },
    socialBtnText: {
      color: Colors.DEFAULT_WHITE,
      fontFamily: Fonts.POPPINS_MEDIUM,
      fontSize: Metrics._scale(13),
      lineHeight: Metrics._scale(13 * 1.4),
    },
  });

export default SignIn;
