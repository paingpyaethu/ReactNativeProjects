import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';

import styles from './loginSecStyle';
import {useLocal} from '../../../hook/useLocal';

const LoginSecurity = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View>
        <TextInput
          style={[styles.input]}
          placeholder={props.pwdPlaceholder}
          value={props.pwdValue}
          onChangeText={props.onChangePwd}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={props.isChecked}
            onValueChange={props.onChangeCheckBox}
            style={styles.checkBox}
          />
          <Text style={styles.checkBoxText}>Remember Password</Text>
          {/* {props.isChecked && <Text>Ok I'will remember</Text>} */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: widthPercentageToDP(10),
          }}>
          <TouchableOpacity
            onPress={props.backLoginAction}
            activeOpacity={0.5}
            style={[
              styles.buttonContainer,
              {
                marginRight: widthPercentageToDP(5),
                backgroundColor: '#f3cf7a',
              },
            ]}>
            <Text style={[styles.buttonText, {color: '#000'}]}>
              {props.backBtn}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.loginSubmit}
            activeOpacity={0.5}
            style={[styles.buttonContainer, {width: widthPercentageToDP(30)}]}>
            <Text style={styles.buttonText}>{local.secLogin}</Text>
          </TouchableOpacity>
        </View>
        <Text>{props.getLoginEmail}</Text>
      </View>
    </View>
  );
};

export default LoginSecurity;
