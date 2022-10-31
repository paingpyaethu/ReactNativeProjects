import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {METRICS} from '../../../theme';

const Input = props => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      value={props.value}
      autoCorrect={props.autoCorrect}
      onChangeText={props.onChangeText}
      onFocus={props.onFocus}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: METRICS._scale(60),
    backgroundColor: '#fff',
    margin: METRICS._scale(10),
    borderRadius: METRICS._scale(15),
    padding: METRICS._scale(10),
    borderWidth: METRICS._scale(2),
    borderColor: 'orange',
  },
});
export default Input;
