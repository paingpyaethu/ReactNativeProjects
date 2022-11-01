import React from 'react';
import {StyleSheet} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {FONTS, METRICS} from '../../theme';

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
      text1Style={styles.text1Style}
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
    borderLeftColor: '#17b978',
  },
  errorToastStyle: {
    borderLeftColor: '#cb3b3b',
  },
  text1Style: {
    fontSize: METRICS._scale(14),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
  },
  text2Style: {
    fontSize: METRICS._scale(12),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: '#390B12',
  },
});
