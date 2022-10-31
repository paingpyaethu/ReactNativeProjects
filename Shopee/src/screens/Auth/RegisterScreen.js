import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ErrorMessage from '../../components/atoms/ErrorMessage';
import CustomButton from '../../components/molecules/Form/CustomButton';
import CustomForm from '../../components/molecules/Form/CustomForm';
import CustomInput from '../../components/molecules/Form/CustomInput';
import {METRICS} from '../../theme';

const RegisterScreen = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (name === '' || email === '' || phone === '' || password === '') {
      setError('Please fill in your credentials');
    } else {
      console.log('success');
    }
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
        {error ? <ErrorMessage message={error} /> : null}
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
