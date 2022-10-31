import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomInput from '../../components/molecules/Form/CustomInput';
import CustomButton from '../../components/molecules/Form/CustomButton';
import CustomForm from '../../components/molecules/Form/CustomForm';
import ErrorMessage from '../../components/atoms/ErrorMessage';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === '' || password === '') {
      setError('Please fill in your credentials');
    } else {
      console.log('success');
    }
  };

  return (
    <CustomForm title={'Login'}>
      <CustomInput
        placeholder={'Enter Email'}
        name={'email'}
        id={'email'}
        value={email}
        onChangeText={text => setEmail(text.toLowerCase())}
      />
      <CustomInput
        placeholder={'Enter Password'}
        name={'password'}
        id={'password'}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {error ? <ErrorMessage message={error} /> : null}
      <CustomButton
        btnText={'Login'}
        footerText={"Don't have an account?"}
        loginRegText={'Register'}
        onPress={() => props.navigation.navigate('Register')}
        onSubmit={handleSubmit}
      />
    </CustomForm>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
