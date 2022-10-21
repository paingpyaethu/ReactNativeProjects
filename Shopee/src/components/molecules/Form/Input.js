import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Metrics from '../../../theme/Metrics';

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
    height: Metrics._scale(60),
    backgroundColor: '#fff',
    margin: Metrics._scale(10),
    borderRadius: Metrics._scale(15),
    padding: Metrics._scale(10),
    borderWidth: Metrics._scale(2),
    borderColor: 'orange',
  },
});
export default Input;
