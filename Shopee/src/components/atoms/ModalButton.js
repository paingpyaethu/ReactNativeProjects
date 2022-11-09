import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {COLORS, FONTS, METRICS} from '../../theme';

const ModalButton = props => {
  return (
    <>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: props.bgColor}]}
        onPress={props.onPress}>
        <MaterialIcons
          name={props.iconName}
          size={METRICS._scale(18)}
          color={COLORS.WHITE}
        />
        <Text style={styles.btnText}>{props.btnText}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  btn: {
    height: METRICS._scale(35),
    width: METRICS._scale(120),
    borderRadius: METRICS._scale(6),
    marginVertical: METRICS._scale(6),

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: METRICS._scale(13),
    lineHeight: METRICS._scale(35),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    color: '#fff',
    textAlign: 'center',

    marginLeft: METRICS._scale(6),
  },
});
