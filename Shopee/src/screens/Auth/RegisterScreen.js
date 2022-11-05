import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useDispatch, useSelector} from 'react-redux';

import ErrorMessage from '../../components/atoms/ErrorMessage';
import Loader from '../../components/atoms/Loader';
import CustomButton from '../../components/molecules/Form/CustomButton';
import CustomInput from '../../components/molecules/Form/CustomInput';
import {AxiosContext} from '../../contexts/AxiosContext';

import {registerUser} from '../../store/services/AuthServices';

import {FONTS, METRICS} from '../../theme';

const RegisterScreen = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [nameErrMsg, setNameErrMsg] = useState('');
  const [phoneErrMsg, setPhoneErrMsg] = useState('');
  const [pwdErrMsg, setPwdErrMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const axiosContext = useContext(AxiosContext);
  const {publicAxios} = axiosContext;

  const dispatch = useDispatch();

  const customValidator = (data, errMsg) => {
    if (!data) {
      return errMsg;
    }
  };

  const _handleRegister = () => {
    const userData = {
      name,
      email,
      phone,
      password,
    };

    let isValid = true;
    if (!email) {
      customValidator(email, setEmailErrMsg('Email required.'));
      isValid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      isValid = false;
      customValidator(email, setEmailErrMsg('Please input valid email.'));
    }

    if (!password) {
      customValidator(password, setPwdErrMsg('Password required.'));
      isValid = false;
    }
    if (!name) {
      customValidator(name, setNameErrMsg('Name required.'));
      isValid = false;
    }

    if (!phone) {
      customValidator(phone, setPhoneErrMsg('Phone number required.'));
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(registerUser(userData, publicAxios, props.navigation));
      }, 1000);
    }
  };

  return (
    <>
      <Loader visible={loading} />
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        enableOnAndroid={true}
        style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.subContainer}>
          <CustomInput
            label={'Name'}
            placeholder={'Name'}
            iconName={'person-outline'}
            name={'name'}
            value={name}
            onChangeText={text => setName(text)}
            onFocus={() => customValidator(name, setNameErrMsg(null))}
            error={nameErrMsg}
          />
          <CustomInput
            label={'Email'}
            placeholder={'Email'}
            iconName={'mail-outline'}
            name={'email'}
            id={'email'}
            value={email}
            onChangeText={text => setEmail(text.toLowerCase())}
            onFocus={() => customValidator(email, setEmailErrMsg(null))}
            error={emailErrMsg}
          />
          <CustomInput
            label={'Phone Number'}
            placeholder={'Phone Number'}
            iconName={'phone'}
            name={'phone'}
            id={'phone'}
            value={phone}
            keyboardType={'numeric'}
            onChangeText={text => setPhone(text)}
            onFocus={() => customValidator(phone, setPhoneErrMsg(null))}
            error={phoneErrMsg}
          />
          <CustomInput
            label={'Password'}
            placeholder={'Password'}
            iconName={'lock-outline'}
            name={'password'}
            id={'password'}
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            onFocus={() => customValidator(password, setPwdErrMsg(null))}
            error={pwdErrMsg}
          />
          <CustomButton
            btnText={'Register'}
            footerText={'Already have an account?'}
            loginRegText={'Login'}
            onPress={() => props.navigation.navigate('Login')}
            onSubmit={() => _handleRegister()}
          />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: METRICS._scale(30),
    paddingHorizontal: METRICS._scale(20),
  },
  title: {
    fontSize: METRICS._scale(30),
    lineHeight: METRICS._scale(30 * 1.4),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    textAlign: 'center',
  },
  subContainer: {
    marginVertical: METRICS._scale(20),
  },
});
