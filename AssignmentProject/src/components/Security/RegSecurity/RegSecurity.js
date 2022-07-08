import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './regSecStyle';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useLocal} from '../../../hook/useLocal';

const RegSecurity = props => {
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
        <TextInput
          style={[styles.input, {marginTop: heightPercentageToDP(3)}]}
          placeholder={props.confirmPwdPlaceholder}
          value={props.confirmPwdValue}
          onChangeText={props.onChangeConfirmPwd}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: widthPercentageToDP(10),
          }}>
          <TouchableOpacity
            onPress={props.backRegAction}
            activeOpacity={0.5}
            style={[
              styles.buttonContainer,
              {
                marginRight: widthPercentageToDP(5),
                backgroundColor: '#2d767f',
              },
            ]}>
            <Text style={[styles.buttonText]}>{props.backBtn}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.submitReg}
            activeOpacity={0.5}
            style={[styles.buttonContainer, {width: widthPercentageToDP(30)}]}>
            <Text style={styles.buttonText}>{local.secReg}</Text>
          </TouchableOpacity>
        </View>
        <Text>{props.getEmail}</Text>
      </View>
    </View>
  );
};

export default RegSecurity;
