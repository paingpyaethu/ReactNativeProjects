import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FONTS, METRICS} from '../../../theme';

const CustomButton = props => {
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={props.onSubmit}>
        <Text style={styles.btnText}>{props.btnText}</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>{props.footerText}</Text>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.loginRegText}>{props.loginRegText}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#8F5F43',
    height: METRICS._scale(50),
    borderRadius: METRICS._scale(6),
    marginTop: METRICS._scale(10),
  },
  btnText: {
    fontSize: METRICS._scale(16),
    lineHeight: METRICS._scale(50),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: '#fff',
    textAlign: 'center',
  },

  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: METRICS._scale(5),
  },
  footerText: {
    fontSize: METRICS._scale(13),
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    marginRight: METRICS._scale(10),
  },
  loginRegText: {
    fontSize: METRICS._scale(14),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
  },
});
