import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';
import Metrics from '../../../theme/Metrics';
import Fonts from '../../../theme/Fonts';

const GetStartedButton = () => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
      <Text style={styles.btnText}>Get Started</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.PRIMARY_COLOR,
    paddingVertical: Metrics._scale(5),
    paddingHorizontal: Metrics._scale(30),
    borderRadius: Metrics._scale(8),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  btnText: {
    fontSize: Metrics._scale(20),
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
  },
});
export default GetStartedButton;
