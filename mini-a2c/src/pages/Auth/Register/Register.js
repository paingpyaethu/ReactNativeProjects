import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';

// Components
import Header from '@components/login/header';
import {AuthContext} from '@context/context';
import {appStorage} from '../../../utils';
import {useLocal} from '../../../hook';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const {getAuth} = useContext(AuthContext);
  const local = useLocal();

  const actionHandler = () => {
    let data = {
      userName: name,
      userEmail: email,
      userPwd: password,
    };
    try {
      appStorage.setItem('@user.data', JSON.stringify(data));
      getAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  const footerHandler = () => {
    if (login) {
      navigation.navigate('Register');
    } else {
      navigation.goBack();
    }
  };

  return (
    <View>
      <Header
        title={local.register}
        buttonText={local.register}
        emailValue={email}
        passValue={password}
        userValue={name}
        onChangeUser={val => setName(val)}
        onChangeEmail={val => setEmail(val)}
        onChangePass={val => setPassword(val)}
        action={actionHandler}
        footerText={local.login}
        isLogin={login}
        footerAction={footerHandler}
      />
    </View>
  );
};

export default Register;
