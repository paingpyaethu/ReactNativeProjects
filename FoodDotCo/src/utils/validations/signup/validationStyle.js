import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import Metrics from '../../../theme/Metrics';

import AntDesign from 'react-native-vector-icons/AntDesign';

export const validationStyle = state => {
  switch (state) {
    case 'valid':
      return {
        ...styles.inputContainer,
        borderWidth: 1,
        borderColor: Colors.SECONDARY_GREEN,
      };
    case 'invalid':
      return {
        ...styles.inputContainer,
        borderWidth: 1,
        borderColor: Colors.DEFAULT_RED,
      };
    default:
      return styles.inputContainer;
  }
};

export const showMarker = state => {
  switch (state) {
    case 'valid':
      return (
        <AntDesign
          name="checkcircleo"
          color={Colors.SECONDARY_GREEN}
          size={Metrics._scale(14)}
        />
      );
    case 'invalid':
      return (
        <AntDesign
          name="closecircleo"
          color={Colors.DEFAULT_RED}
          size={Metrics._scale(14)}
        />
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: Metrics._scale(10),
    marginHorizontal: Metrics._scale(20),
    borderRadius: Metrics._scale(8),
    borderWidth: 1,
    borderColor: Colors.INACTIVE_GREY,
    justifyContent: 'center',
  },
});
