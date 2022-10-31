import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {FONTS, METRICS} from '../../theme';

const ErrorMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  text: {
    fontFamily: FONTS.MONTSERRAT_BOLD,
    color: '#DA2C2C',
  },
});
