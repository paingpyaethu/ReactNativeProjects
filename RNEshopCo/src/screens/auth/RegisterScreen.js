import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LottieView from 'lottie-react-native';

import ImagePicker from 'react-native-image-crop-picker';

import CustomInput from '../../components/molecules/Form/CustomInput';

import {COLORS, FONTS, METRICS, ROUTES} from '../../themes';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../stores/slices/auth/authSlice';

const RegisterScreen = ({navigation}) => {
  const auth = useSelector(state => state.auth);

  let emailExisted =
    auth.registerError && auth.registerError.includes('E11000');

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [pwdErrMsg, setPwdErrMsg] = useState('');
  const [imageErrMsg, setImageErrMsg] = useState('');

  const _uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then(image => {
      console.log('Image:::>>', image);
      setAvatar('data:image/jpeg;base64,' + image.data);
    });
  };
  const customValidator = (data, errMsg) => {
    if (!data) {
      return errMsg;
    }
  };
  const _handleSubmit = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!name) {
      customValidator(name, setNameErrMsg('Name required.'));
      isValid = false;
    } else if (name.length < 3) {
      customValidator(
        name,
        setNameErrMsg('Please enter a name at least 3 characters'),
      );
      isValid = false;
    }

    if (!email) {
      customValidator(email, setEmailErrMsg('Email required.'));
      isValid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      customValidator(email, setEmailErrMsg('Please input valid email.'));
      isValid = false;
    }

    if (!password) {
      customValidator(password, setPwdErrMsg('Password required.'));
      isValid = false;
    } else if (password.length < 5) {
      customValidator(
        password,
        setPwdErrMsg('Password should be greater than 5 characters'),
      );
      isValid = false;
    }

    if (avatar === '' || !avatar) {
      customValidator(avatar, setImageErrMsg('No Image In Request!'));
      isValid = false;
    }

    if (isValid) {
      customValidator(
        [name, email, password, avatar],
        [
          setNameErrMsg(null),
          setEmailErrMsg(null),
          setPwdErrMsg(null),
          setImageErrMsg(null),
        ],
      );

      const userData = {
        name,
        email,
        password,
        avatar,
      };

      dispatch(registerUser(userData));
    }
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
            <Text style={styles.signUpContinueTxt}>
              Create an account to continue
            </Text>

            <CustomInput
              label={'Name'}
              iconName={'person-circle-outline'}
              name={'name'}
              value={name}
              onChangeText={text => setName(text)}
              error={nameErrMsg}
            />
            <CustomInput
              label={'Email'}
              iconName={'mail-open-outline'}
              name={'email'}
              value={email}
              keyboardType={'email-address'}
              onChangeText={text => setEmail(text.toLowerCase())}
              error={emailExisted ? 'Email already exists.' : emailErrMsg}
            />
            <CustomInput
              label={'Password'}
              iconName={'lock-closed-outline'}
              name={'password'}
              value={password}
              onChangeText={text => setPassword(text)}
              error={pwdErrMsg}
              password
            />
            <View style={styles.relative}>
              <View style={styles.uploadPhotoContainer}>
                <Image
                  source={{
                    uri:
                      avatar === ''
                        ? 'https://res.cloudinary.com/dg4lqjtvg/image/upload/v1670220931/avatars/default-user_dsmx5s.png'
                        : avatar,
                  }}
                  style={styles.image}
                />
                <TouchableOpacity
                  style={styles.uploadPhotoTxtContainer}
                  onPress={_uploadImage}>
                  <Text style={styles.uploadPhotoTxt}>Choose Photo</Text>
                </TouchableOpacity>
              </View>
              {imageErrMsg && <Text style={styles.errMsg}>{imageErrMsg}</Text>}
            </View>
            {/******************** REGISTER BUTTON *********************/}
            <TouchableOpacity
              onPress={_handleSubmit}
              activeOpacity={0.7}
              style={styles.signUpBtnWrapper}>
              {auth.isLoading === true ? (
                <LottieView
                  source={require('../../assets/images/reg-login-loading.json')}
                  autoPlay
                  loop
                />
              ) : (
                <Text style={styles.signUpText}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}> Already have an account? </Text>
            {/******************** LOGIN BUTTON *********************/}
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
              <Text style={styles.signupBtn}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default RegisterScreen;

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
    width: METRICS.width * 0.4,
    height: METRICS.width * 0.4,
  },
  signUpContinueTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS._scale(20),
    lineHeight: METRICS._scale(20 * 1.4),
    color: COLORS.SECONDARY_COLOR,
    textAlign: 'center',
    marginBottom: METRICS._scale(15),
  },
  // Sign Up Btn Styles
  signUpBtnWrapper: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: METRICS._scale(20),
    height: METRICS._scale(40),
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
  signUpText: {
    color: COLORS.LIGHT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS._scale(15),
    lineHeight: METRICS._scale(40),
    textAlign: 'center',
  },
  relative: {},
  uploadPhotoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: METRICS.width * 0.1,
    height: METRICS.width * 0.1,
    borderRadius: METRICS.width * 0.1,

    borderWidth: METRICS._scale(3),
    borderColor: COLORS.DEFAULT_GREY,
  },
  uploadPhotoTxtContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: METRICS._scale(8),
    marginLeft: METRICS._scale(8),

    borderRadius: METRICS._scale(6),
    borderWidth: METRICS._scale(1),
    borderColor: COLORS.SECONDARY_COLOR,
  },
  uploadPhotoTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS._scale(12),
    // lineHeight: METRICS._scale(12 * 1.4),
    color: COLORS.SECONDARY_COLOR,
  },
  errMsg: {
    color: '#EF452C',
    fontSize: METRICS._scale(12),
    lineHeight: METRICS._scale(12 * 1.4),
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    marginTop: METRICS._scale(4),
  },
  // footer
  footer: {
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: METRICS._scale(18),
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
