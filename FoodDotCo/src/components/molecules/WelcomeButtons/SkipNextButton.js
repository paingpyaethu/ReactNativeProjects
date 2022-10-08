import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Metrics from '../../../theme/Metrics';
import Fonts from '../../../theme/Fonts';
import {useOrientation} from '../../../hooks/useOrientation';
import Colors from '../../../theme/Colors';

const SkipNextButton = props => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{marginLeft: Metrics._scale(10)}}
        onPress={props.onPressSkip}>
        <Text style={styles.btnText}>SKIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.nextBtn}
        onPress={props.onPressNext}>
        <Text style={styles.btnText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: (orientation.width / 100) * 90,
    },
    btnText: {
      fontSize: Metrics._scale(16),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      lineHeight: Metrics._scale(60),
      textAlign: 'center',
    },
    nextBtn: {
      backgroundColor: Colors.LIGHT_GREEN,
      borderRadius: Metrics._scale(50),
      width: Metrics._scale(60),
      height: Metrics._scale(60),
    },
  });
export default SkipNextButton;
