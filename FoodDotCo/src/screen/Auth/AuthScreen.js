import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SignIn from '../../components/organisms/SignIn/SignIn';
import SignUp from '../../components/organisms/SignUp/SignUp';

const AuthScreen = ({navigation}) => {
  const [toggle, setToggle] = useState(true);

  const authToggleHandler = () => {
    setToggle(!toggle);
  };
  const forgotPwdHandler = () => {
    navigation.navigate('ForgotPwdScreen');
  };
  const regPhoneHandler = () => {
    navigation.navigate('RegisterPhoneScreen');
  };
  return (
    <View style={styles.container}>
      {toggle ? (
        <SignIn
          navigation={navigation}
          authToggleHandler={authToggleHandler}
          forgotPwd={forgotPwdHandler}
        />
      ) : (
        <SignUp
          navigation={navigation}
          authToggleHandler={authToggleHandler}
          regPhone={regPhoneHandler}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthScreen;
