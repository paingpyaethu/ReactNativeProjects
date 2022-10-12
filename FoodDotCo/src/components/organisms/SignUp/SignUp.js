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

import Lottie from 'lottie-react-native';
import {
  checkUser,
  userReg,
} from '../../../stores/services/AuthenticationService';
import {
  showMarker,
  validationStyle,
} from '../../../utils/validations/signup/validationStyle';

const SignUp = props => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);

  const [isPwdShow, setIsPwdShow] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [userErrMsg, setUserErrMsg] = useState('');

  const [userValidate, setUserValidate] = useState('default');
  const [emailValidate, setEmailValidate] = useState('default');

  const [isLoading, setIsLoading] = useState(false);

  const register = () => {
    const user = {
      username,
      email,
      password,
    };
    console.log(user);
    setIsLoading(true);
    userReg(user).then(response => {
      setIsLoading(false);
      console.log(response);
      setErrMsg('');
      if (!response?.status) {
        setErrMsg(response?.message);
      }
    });
  };

  const checkUserExist = async (type, val) => {
    if (val?.length > 0) {
      checkUser(type, val).then(res => {
        if (res?.status) {
          type === 'email' && emailErrMsg ? setEmailErrMsg('') : null;
          type === 'username' && userErrMsg ? setUserErrMsg('') : null;
          type === 'email' ? setEmailValidate('valid') : null;
          type === 'username' ? setUserValidate('valid') : null;
        } else {
          type === 'email' ? setEmailErrMsg(res?.message) : null;
          type === 'username' ? setUserErrMsg(res?.message) : null;
          type === 'email' ? setEmailValidate('invalid') : null;
          type === 'username' ? setUserValidate('invalid') : null;
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {/* HeaderSignUp */}
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back"
          size={Metrics._scale(30)}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>

      {/* Create Account Title */}
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.content}>
        Enter your email, choose a username and password.{' '}
        <Text style={styles.haveAccount} onPress={props.authToggleHandler}>
          Already have account?
        </Text>
      </Text>

      {/* InputContainer */}
      <View style={validationStyle(userValidate)}>
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
            onChangeText={val => setUsername(val)}
            onEndEditing={({nativeEvent: {text}}) =>
              checkUserExist('username', text)
            }
            style={styles.inputText}
          />
          {showMarker(userValidate)}
        </View>
      </View>
      {userErrMsg && <Text style={styles.errorMessage}>{userErrMsg}</Text>}

      <Separator height={15} />
      <View style={validationStyle(emailValidate)}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={Metrics._scale(18)}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: Metrics._scale(10)}}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            onChangeText={val => setEmail(val)}
            onEndEditing={({nativeEvent: {text}}) =>
              checkUserExist('email', text)
            }
            style={styles.inputText}
          />
          {showMarker(emailValidate)}
        </View>
      </View>
      {emailErrMsg && <Text style={styles.errorMessage}>{emailErrMsg}</Text>}

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
            onChangeText={val => setPassword(val)}
            style={styles.inputText}
          />
          <Feather
            name={isPwdShow ? 'eye' : 'eye-off'}
            size={Metrics._scale(18)}
            color={Colors.DEFAULT_GREY}
            style={{marginLeft: Metrics._scale(10)}}
            onPress={() => setIsPwdShow(!isPwdShow)}
          />
        </View>
      </View>
      {/* Error Message */}
      {errMsg && <Text style={styles.errorMessage}>{errMsg}</Text>}

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.sighUpBtn}
        activeOpacity={0.8}
        onPress={() => register()}>
        {isLoading ? (
          <Lottie source={Images.LOADING} autoPlay={true} />
        ) : (
          <Text style={styles.sighUpBtnText}>Create Account</Text>
        )}
      </TouchableOpacity>

      <Separator height={15} />
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
    haveAccount: {
      color: Colors.PRIMARY_COLOR,
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
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

    errorMessage: {
      fontSize: Metrics._scale(10),
      lineHeight: Metrics._scale(10 * 1.4),
      color: Colors.DEFAULT_RED,
      fontFamily: Fonts.POPPINS_MEDIUM,
      marginHorizontal: Metrics._scale(20),
      marginTop: Metrics._scale(5),
    },

    //*** Create Account Button ***//
    sighUpBtn: {
      backgroundColor: Colors.PRIMARY_COLOR,
      paddingVertical: Metrics._scale(8),
      paddingHorizontal: Metrics._scale(30),
      marginHorizontal: Metrics._scale(20),
      marginTop: Metrics._scale(18),
      borderRadius: Metrics._scale(8),

      height: Metrics._scale(40),

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
    sighUpBtnText: {
      fontSize: Metrics._scale(16),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_WHITE,
      lineHeight: Metrics._scale(16 * 1.4),
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

export default SignUp;
