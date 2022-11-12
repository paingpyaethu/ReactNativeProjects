import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-crop-picker';

import CustomInput from '../../components/molecules/Form/CustomInput';

import {COLORS, FONTS, METRICS, ROUTES} from '../../themes';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser} from '../../stores/slices/auth/authSlice';

const RegisterScreen = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  console.log('AuthReg::: ', auth);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  console.log('Avatar:::', avatar);

  const _uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then(image => {
      console.log('SelectedImage:::', image);
      setAvatar(image.sourceURL);
      // setAvatar('data:image/jpeg;base64,' + image.data);
    });
  };
  const _handleSubmit = () => {
    const formData = new FormData();

    // const newImageUri = 'file:///' + avatar.split('file:/').join('');
    formData.append('avatar', {
      uri: avatar,
      name: avatar,
      // fileName: 'image',
      type: 'image/jpg',
      // name: newImageUri.split('/').pop(),
    });
    formData.append('avatar', avatar);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    // setEmail('');
    // setPassword('');
    // const user = {
    //   name,
    //   email,
    //   password,
    //   avatar,
    // };
    dispatch(registerUser(formData));
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
              // error={auth.error}
            />
            <CustomInput
              label={'Email'}
              iconName={'mail-open-outline'}
              name={'email'}
              value={email}
              keyboardType={'email-address'}
              onChangeText={text => setEmail(text.toLowerCase())}
              // error={auth.error}
            />
            <CustomInput
              label={'Password'}
              iconName={'lock-closed-outline'}
              name={'password'}
              value={password}
              onChangeText={text => setPassword(text)}
              // error={auth.error}
              password
            />
            <View style={styles.relative}>
              <View style={styles.uploadPhotoContainer}>
                <Image
                  source={{
                    uri:
                      avatar === ''
                        ? 'https://mern-ecommerce-stores.herokuapp.com/profile.png'
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
            </View>
            {/******************** REGISTER BUTTON *********************/}
            <TouchableOpacity
              onPress={_handleSubmit}
              activeOpacity={0.7}
              style={styles.signUpBtnWrapper}>
              <Text style={styles.signUpText}>Sign Up</Text>
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
    width: METRICS._scale(150),
    height: METRICS._scale(100),
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
    width: METRICS._scale(40),
    height: METRICS._scale(40),
    borderRadius: METRICS._scale(20),

    borderWidth: METRICS._scale(1.5),
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
