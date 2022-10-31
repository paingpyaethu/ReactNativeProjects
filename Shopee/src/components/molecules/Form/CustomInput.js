import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {FONTS, METRICS} from '../../../theme';

const CustomInput = props => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor={'#C9C9C9'}
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
    backgroundColor: '#fff',
    height: METRICS._scale(50),
    margin: METRICS._scale(10),
    padding: METRICS._scale(10),

    borderRadius: METRICS._scale(6),
    borderWidth: METRICS._scale(2),
    borderColor: '#ADADAD',

    fontSize: METRICS._scale(14),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
});
export default CustomInput;
