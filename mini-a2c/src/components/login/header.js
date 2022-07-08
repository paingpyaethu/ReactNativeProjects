/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

// Styles
import styles from './style';
import {useLocal} from '../../hook';

const header = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      <View style={styles.inputContainer}>
        {!props.isLogin && (
          <TextInput
            placeholder={local.userName}
            value={props.userValue}
            onChangeText={props.onChangeUser}
            style={styles.input}
          />
        )}
        <TextInput
          placeholder={local.emailPlaceholder}
          style={[styles.input, {marginTop: 20}]}
          value={props.emailValue}
          onChangeText={props.onChangeEmail}
        />
        <TextInput
          placeholder={local.pwdPlaceholder}
          secureTextEntry
          value={props.passValue}
          onChangeText={props.onChangePass}
          style={[styles.input, {marginTop: 20}]}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={props.action}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </TouchableOpacity>

      <View style={styles.accContainer}>
        {props.isLogin ? (
          <Text>{local.noAccount} </Text>
        ) : (
          <Text>{local.already}</Text>
        )}

        <TouchableOpacity onPress={props.footerAction}>
          <Text style={styles.footerText}>{props.footerText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default header;
