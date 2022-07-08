import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';
import CheckBox from '@react-native-community/checkbox';

import {useLocal} from '../../hook/useLocal';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './authScreenStyle';
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils';

const AuthScreen = ({navigation}) => {
  const local = useLocal();

  const {language, getLanguages} = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);
  const [isReg, setIsReg] = useState(true);

  const [email, setEmail] = useState('');
  const [loginEmail, setLoginEmail] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(language);

  const authToggleHandler = () => {
    setToggle(!toggle);
  };
  const loginNextBtnActionHandler = () => {
    navigation.navigate('PasswordSecurity', {
      isReg: !isReg,
      loginEmail: loginEmail,
    });
  };
  const regNextBtnActionHandler = () => {
    navigation.navigate('PasswordSecurity', {isReg: isReg, email: email});
  };

  const changeLanguage = val => {
    appStorage.setUserData('@language', val);
    getLanguages(val);
  };

  return (
    <View>
      <View style={{alignItems: 'flex-end', padding: hp(2)}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <CheckBox
                  style={{
                    paddingLeft: 20,
                  }}
                  disabled={false}
                  value={toggleCheckBox == 'en' ? true : false}
                  onValueChange={() =>
                    toggleCheckBox == 'en'
                      ? setToggleCheckBox('mm')
                      : setToggleCheckBox('en')
                  }
                />
                <TouchableOpacity
                  onPress={() =>
                    toggleCheckBox == 'en'
                      ? setToggleCheckBox('mm')
                      : setToggleCheckBox('en')
                  }>
                  <Text style={{marginTop: 5}}>English</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <CheckBox
                  // style={styles.checkbox}
                  disabled={false}
                  value={toggleCheckBox == 'mm' ? true : false}
                  onValueChange={() =>
                    toggleCheckBox == 'mm'
                      ? setToggleCheckBox('en')
                      : setToggleCheckBox('mm')
                  }
                />
                <TouchableOpacity
                  onPress={() =>
                    toggleCheckBox == 'mm'
                      ? setToggleCheckBox('en')
                      : setToggleCheckBox('mm')
                  }>
                  <Text style={{marginTop: 5}}>Myanmar</Text>
                </TouchableOpacity>
              </View>
              <Pressable
                style={[styles.modalButton, styles.buttonClose]}
                onPress={() => {
                  changeLanguage(toggleCheckBox);
                  setModalVisible(false);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.language}>Language</Text>
        </TouchableOpacity>
      </View>

      {toggle && (
        <Login
          title={local.loginTitle}
          emailValue={loginEmail}
          onChangeEmail={val => setLoginEmail(val)}
          buttonText={local.nextBtn}
          authText={local.reg}
          authToggle={authToggleHandler}
          loginNextBtnAction={loginNextBtnActionHandler}
          copyRight={local.copyRight}
        />
      )}
      <Register
        title={local.regTitle}
        emailValue={email}
        onChangeEmail={val => setEmail(val)}
        buttonText={local.nextBtn}
        authText={local.login}
        authToggle={authToggleHandler}
        regNextBtnAction={regNextBtnActionHandler}
      />
    </View>
  );
};

export default AuthScreen;
