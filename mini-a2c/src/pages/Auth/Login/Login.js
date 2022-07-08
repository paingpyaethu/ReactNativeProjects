import React, {useState, useContext} from 'react';
import {View, Text, ToastAndroid, TouchableOpacity} from 'react-native';

// Components
import Header from '@components/login/header';
import {AuthContext} from '@context/context';
import {appStorage} from '../../../utils';
import styles from './Style';
import {useLocal} from '../../../hook';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const {lang, getAuth, getLang} = useContext(AuthContext);
  const local = useLocal();

  const actionHandler = () => {
    try {
      const userData = appStorage.getItem('@user.data');
      let data = JSON.parse(userData);
      goLogin(data);
    } catch (error) {
      console.log('error :', error);
    }
  };

  const goLogin = value => {
    if (value.userEmail === email && value.userPwd === password) {
      getAuth(true);
    } else {
      ToastAndroid.show('Email or password wrong!', ToastAndroid.SHORT);
    }
  };

  const footerHandler = () => {
    if (login) {
      navigation.navigate('Register');
    } else {
      navigation.navigate('Login');
    }
  };

  const changeLanguage = value => {
    try {
      appStorage.setItem('@lang', value);
      getLang(value);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View>
      <View style={styles.languageContainer}>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Text>English</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeLanguage('mm')}>
          <Text>Myanmar</Text>
        </TouchableOpacity>
      </View>
      <Header
        title={local.login}
        buttonText={local.login}
        emailValue={email}
        passValue={password}
        onChangeEmail={val => setEmail(val)}
        onChangePass={val => setPassword(val)}
        action={actionHandler}
        footerText={local.register}
        isLogin={login}
        footerAction={footerHandler}
      />
    </View>
  );
};

export default Login;
