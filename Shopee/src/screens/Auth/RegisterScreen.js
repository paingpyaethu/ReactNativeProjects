import axios from 'axios';
import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useDispatch, useSelector} from 'react-redux';

import ErrorMessage from '../../components/atoms/ErrorMessage';
import CustomButton from '../../components/molecules/Form/CustomButton';
import CustomForm from '../../components/molecules/Form/CustomForm';
import CustomInput from '../../components/molecules/Form/CustomInput';
import {AxiosContext} from '../../contexts/AxiosContext';

import {BASE_URL} from '../../store/api_endpoint';
import {registerUser} from '../../store/services/AuthServices';

import {METRICS} from '../../theme';

const RegisterScreen = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');

  const axiosContext = useContext(AxiosContext);
  const {publicAxios} = axiosContext;

  const dispatch = useDispatch();

  const _handleRegister = () => {
    const userData = {
      name,
      email,
      phone,
      password,
    };

    dispatch(registerUser(userData, publicAxios, props.navigation));
  };

  // const handleSubmit = async () => {
  //   if (name === '' || email === '' || phone === '' || password === '') {
  //     setErrorMsg('Please fill in your credentials');
  //   }

  //   let user = {
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     password: password,
  //     isAdmin: false,
  //   };
  //   register(user);
  // };
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
          onSubmit={() => _handleRegister()}
        />
      </CustomForm>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
