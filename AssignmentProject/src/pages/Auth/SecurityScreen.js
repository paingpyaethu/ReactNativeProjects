import {View, ToastAndroid} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import RegSecurity from '../../components/Security/RegSecurity/RegSecurity';
import {useLocal} from '../../hook/useLocal';
import LoginSecurity from '../../components/Security/LoginSecurity/LoginSecurity';

import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils';

const SecurityScreen = ({navigation, route}) => {
  const local = useLocal();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setCheckBox] = useState(false);

  const [loginPassword, setLoginPassword] = useState('');

  const {isReg, email, loginEmail} = route.params;

  const {getAuth} = useContext(AuthContext);

  const backRegActionHandler = () => {
    navigation.goBack();
  };

  const backLoginActionHandler = () => {
    navigation.goBack();
  };

  const submitRegHandler = () => {
    const isNotBlank = password !== '' && confirmPassword !== '';
    const isMatch = password === confirmPassword;

    if (isNotBlank && isMatch) {
      let data = {
        userEmail: email,
        userPwd: password,
        userConfirmPwd: confirmPassword,
      };
      appStorage.setUserData('user.data', JSON.stringify(data));
      getAuth(true);
      ToastAndroid.show('Success Register!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Email or password wrong!', ToastAndroid.SHORT);
    }
  };

  const rememberPassword = () => {
    // appStorage.setItem('user.data',)
    let checkData = {
      checkPwd: password,
    };
    isChecked && appStorage.setUserData('user.data', JSON.stringify(checkData));
  };
  useEffect(() => {
    RNSecureKeyStore.get('user.data').then(
      res => {
        let data = JSON.parse(res);
        console.log(data);
        if (data.checkPwd) {
          setCheckBox(true);
        }
      },
      err => {
        console.log(err);
      },
    );
  }, []);
  const submitLoginHandler = () => {
    // const userData = appStorage.getItem('user.data');
    // console.log('UserData : ', userData);
    // if (data.userEmail === loginEmail && data.userPwd === loginPassword) {
    //   getAuth(true);
    //   ToastAndroid.show('Wow.. That is great', ToastAndroid.SHORT);
    // } else {
    //   ToastAndroid.show('Email or password wrong!', ToastAndroid.SHORT);
    // }

    RNSecureKeyStore.get('user.data').then(
      res => {
        let data = JSON.parse(res);
        console.log('UserData : ', data);
        if (data.userEmail === loginEmail && data.userPwd === loginPassword) {
          let checkData = {
            checkPwd: data.userPwd,
            userEmail: data.userEmail,
            userPwd: data.userPwd,
          };
          isChecked &&
            appStorage.setItem('user.data', JSON.stringify(checkData));
          getAuth(true);
          ToastAndroid.show('Wow.. That is great', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Email or password wrong!', ToastAndroid.SHORT);
        }
      },
      err => {
        console.log(err);
      },
    );
  };
  return (
    <View>
      {isReg && (
        <RegSecurity
          title={local.securityTitle}
          pwdPlaceholder={local.pwdPlaceholder}
          confirmPwdPlaceholder={local.confirmPwdPlaceholder}
          pwdValue={password}
          confirmPwdValue={confirmPassword}
          onChangePwd={val => setPassword(val)}
          onChangeConfirmPwd={val => setConfirmPassword(val)}
          backRegAction={backRegActionHandler}
          submitReg={submitRegHandler}
          backBtn={local.secBack}
          getEmail={email}
        />
      )}
      <LoginSecurity
        title={local.securityTitle}
        pwdPlaceholder={local.pwdPlaceholder}
        pwdValue={loginPassword}
        onChangePwd={val => setLoginPassword(val)}
        isChecked={isChecked}
        onChangeCheckBox={setCheckBox}
        backLoginAction={backLoginActionHandler}
        loginSubmit={submitLoginHandler}
        backBtn={local.secBack}
        getLoginEmail={loginEmail}
      />
    </View>
  );
};

export default SecurityScreen;
