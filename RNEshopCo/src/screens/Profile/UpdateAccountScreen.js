import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

import UpdatePassword from '../../components/organisms/Profile/UpdatePassword';
import UpdateProfile from '../../components/organisms/Profile/UpdateProfile';
import {AxiosContext} from '../../contexts/AxiosContext';
import {BASE_URL} from '../../stores/api_endpoint';
import {COLORS, METRICS, ROUTES} from '../../themes';
import {useDispatch} from 'react-redux';
import {logout} from '../../stores/slices/auth/authSlice';

const UpdateAccountScreen = ({route}) => {
  const navigation = useNavigation();
  const {authAxios} = useContext(AxiosContext);
  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [pwdErrMsg, setPwdErrMsg] = useState('');
  const [oldPwdErrMsg, setOldPwdErrMsg] = useState('');
  const [newPwdErrMsg, setNewPwdErrMsg] = useState('');
  const [confirmPwdErrMsg, setConfirmPwdErrMsg] = useState('');

  const customValidator = (data, errMsg) => {
    if (!data) {
      return errMsg;
    }
  };

  const _passwordChangeHandler = () => {
    let isValid = true;

    if (!oldPassword && !newPassword && !confirmPassword) {
      customValidator(pwdErrMsg, setPwdErrMsg('Please fill all the fields'));
      isValid = false;
    }
    if (!oldPassword) {
      customValidator(oldPwdErrMsg, setOldPwdErrMsg('Required'));
      isValid = false;
    } else if (!newPassword) {
      customValidator(newPwdErrMsg, setNewPwdErrMsg('Required'));
      isValid = false;
    } else if (!confirmPassword) {
      customValidator(confirmPwdErrMsg, setConfirmPwdErrMsg('Required'));
      isValid = false;
    } else if (oldPassword === newPassword) {
      customValidator(
        newPwdErrMsg,
        setNewPwdErrMsg('New Password should be different from Old Password'),
      );
      isValid = false;
    } else if (newPassword.length < 5) {
      customValidator(
        newPwdErrMsg,
        setNewPwdErrMsg('Password should be greater than 5 characters'),
      );
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      customValidator(
        [newPwdErrMsg, confirmPwdErrMsg],
        [
          setNewPwdErrMsg('Password not matched with each other'),
          setConfirmPwdErrMsg('Password not matched with each other'),
        ],
      );
      isValid = false;
    } else if (isValid) {
      customValidator(
        [pwdErrMsg, oldPassword, newPassword, confirmPassword],
        [
          setPwdErrMsg(null),
          setOldPwdErrMsg(null),
          setNewPwdErrMsg(null),
          setConfirmPwdErrMsg(null),
        ],
      );

      authAxios
        .put(`${BASE_URL}/user/update/password`, {
          oldPassword,
          newPassword,
          confirmPassword,
        })
        .then(res => {
          if (res.status === 200) {
            Toast.show({
              topOffset: METRICS._scale(60),
              type: 'success',
              text1: res.data.message,
              visibilityTime: 3000,
            });
            setTimeout(() => {
              dispatch(logout());
            }, 1000);
          }
        })
        .catch(e => {
          let errMsg = e.response.data.message;
          Toast.show({
            type: 'error',
            text1: errMsg,
            position: 'bottom',
            visibilityTime: 3000,
          });
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PROFILE)}>
          <IonIcons
            name="arrow-back-circle-outline"
            size={METRICS.width * 0.08}
            color={COLORS.FOCUS_COLOR}
          />
        </TouchableOpacity>
      </View>
      {route.params?.isProfile !== true ? (
        <UpdatePassword
          oldPassword={oldPassword}
          setOldPassword={setOldPassword}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          passwordChangeHandler={_passwordChangeHandler}
          pwdErrMsg={pwdErrMsg}
          oldPwdErrMsg={oldPwdErrMsg}
          newPwdErrMsg={newPwdErrMsg}
          confirmPwdErrMsg={confirmPwdErrMsg}
        />
      ) : (
        <UpdateProfile />
      )}
    </SafeAreaView>
  );
};

export default UpdateAccountScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  header: {
    paddingHorizontal: METRICS.width * 0.03,
    marginTop: METRICS.width * 0.03,
  },
});
