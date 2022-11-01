import axios from 'axios';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Toast from 'react-native-toast-message';

import ErrorMessage from '../../components/atoms/ErrorMessage';
import CustomButton from '../../components/molecules/Form/CustomButton';
import CustomForm from '../../components/molecules/Form/CustomForm';
import CustomInput from '../../components/molecules/Form/CustomInput';
import {BASE_URL} from '../../store/api_endpoint';
import {METRICS} from '../../theme';

const RegisterScreen = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    if (name === '' || email === '' || phone === '' || password === '') {
      setErrorMsg('Please fill in your credentials');
    }

    let user = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      isAdmin: false,
    };

    axios
      .post(`${BASE_URL}/users/register`, user)
      .then(res => {
        if (res.status === 200) {
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            text2: 'Please login your account',
            visibilityTime: 3000,
          });
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 500);
        }
      })
      .catch(error => {
        Toast.show({
          topOffset: METRICS._scale(60),
          type: 'error',
          text1: 'Something went wrong',
          text2: 'Please try again!',
        });
      });
  };
  return (
    <KeyboardAwareScrollView viewIsInsideTabBar={true} enableOnAndroid={true}>
      <CustomForm title={'Register'}>
        <CustomInput
          placeholder={'Name'}
          name={'name'}
          id={'name'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <CustomInput
          placeholder={'Email'}
          name={'email'}
          id={'email'}
          value={email}
          onChangeText={text => setEmail(text.toLowerCase())}
        />
        <CustomInput
          placeholder={'Phone Number'}
          name={'phone'}
          id={'phone'}
          value={phone}
          keyboardType={'numeric'}
          onChangeText={text => setPhone(text)}
        />
        <CustomInput
          placeholder={'Password'}
          name={'password'}
          id={'password'}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        {errorMsg ? <ErrorMessage message={errorMsg} /> : null}
        <CustomButton
          btnText={'Register'}
          footerText={'Already have an account?'}
          loginRegText={'Login'}
          onPress={() => props.navigation.navigate('Login')}
          onSubmit={handleSubmit}
        />
      </CustomForm>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
