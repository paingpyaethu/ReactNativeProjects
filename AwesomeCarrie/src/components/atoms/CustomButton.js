import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {COLORS, METRICS} from '../../themes';

const CustomButton = props => {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={[COLORS.PRIMARY_COLOR, COLORS.SECONDARY_COLOR]}
        style={styles.btn}>
        <Text style={styles.btnTxt}>{props.btnText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    height: METRICS.width * 0.12,
    width: METRICS.width * 0.8,
    paddingHorizontal: METRICS.width * 0.04,
    borderRadius: METRICS.width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: METRICS.width * 0.04,
  },
});
