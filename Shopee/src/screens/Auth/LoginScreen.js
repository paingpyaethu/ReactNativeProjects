import {StyleSheet, Text, View, Keyboard} from 'react-native';
import React, {useState, useContext} from 'react';
import CustomInput from '../../components/molecules/Form/CustomInput';
import CustomButton from '../../components/molecules/Form/CustomButton';
import {useDispatch} from 'react-redux';
import {AxiosContext} from '../../contexts/AxiosContext';
import {login} from '../../store/services/AuthServices';
import {FONTS, METRICS} from '../../theme';
import Loader from '../../components/atoms/Loader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
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

  const _goToRegister = () => {
    props.navigation.navigate('Register');
    setTimeout(() => {
      customValidator(
        [email, password],
        [setEmailErrMsg(null), setPwdErrMsg(null)],
      );
    }, 500);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    const user = {
      email,
      password,
    };
    let isValid = true;
    if (!email) {
      customValidator(email, setEmailErrMsg('Email required.'));
      isValid = false;
    }
    if (!password) {
      customValidator(password, setPwdErrMsg('Password Required'));
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(login(user, publicAxios, props.navigation));
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
        <Text style={styles.title}>Log In</Text>
        <View style={styles.subContainer}>
          <CustomInput
            label={'Email'}
            name={'email'}
            value={email}
            onChangeText={text => {
              setEmail(text.toLowerCase());
            }}
            onFocus={() => customValidator(email, setEmailErrMsg(null))}
            iconName={'mail-outline'}
            placeholder={'Enter Email'}
            error={emailErrMsg}
          />
          <CustomInput
            label={'Password'}
            name={'password'}
            value={password}
            onChangeText={text => setPassword(text)}
            onFocus={() => customValidator(password, setPwdErrMsg(null))}
            iconName={'lock-outline'}
            placeholder={'Enter Password'}
            password
            error={pwdErrMsg}
          />
          <CustomButton
            btnText={'Login'}
            footerText={"Don't have an account?"}
            loginRegText={'Register'}
            onPress={() => {
              _goToRegister();
            }}
            onSubmit={() => handleSubmit()}
          />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;

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
