import React from 'react';
import {StyleSheet} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {COLORS, FONTS, METRICS} from '../../themes';

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={styles.baseToastStyle}
      contentContainerStyle={{paddingHorizontal: METRICS._scale(14)}}
      text1Style={styles.text1Style}
      text2Style={styles.text2Style}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      style={styles.errorToastStyle}
      text1Style={styles.errText1Style}
      text2Style={styles.text2Style}
    />
  ),
};

const CustomToast = () => {
  return <Toast config={toastConfig} />;
};

export default CustomToast;

const styles = StyleSheet.create({
  baseToastStyle: {
    borderLeftColor: COLORS.DEFAULT_GREEN,
  },
  errorToastStyle: {
    borderLeftColor: COLORS.DEFAULT_RED,
  },
  text1Style: {
    fontSize: METRICS._scale(14),
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
  },
  text2Style: {
    fontSize: METRICS._scale(12),
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    color: COLORS.SECONDARY_COLOR,
  },
  errText1Style: {
    fontSize: METRICS._scale(10),
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
  },
});
