import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './loginStyle';
import {useLocal} from '../../hook/useLocal';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Login = props => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      <TextInput
        style={[styles.input, {marginTop: heightPercentageToDP(8)}]}
        placeholder={local.emailPlaceholder}
        value={props.emailValue}
        onChangeText={props.onChangeEmail}
      />

      {/* Next Button Start */}
      <TouchableOpacity
        onPress={props.loginNextBtnAction}
        activeOpacity={0.5}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>
      {/* Next Button End */}

      <View style={styles.authToogleContainer}>
        <Text style={styles.authText}>{local.toRegister}</Text>

        <TouchableOpacity onPress={props.authToggle}>
          <Text style={[styles.authText, {color: 'red'}]}>
            {props.authText}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.copyRightContainer}>
        <Text style={styles.copyRight}>{props.copyRight} </Text>

        <Text style={[styles.copyRight, {color: 'red'}]}>paing pyae thu</Text>
      </View>
    </View>
  );
};

export default Login;
