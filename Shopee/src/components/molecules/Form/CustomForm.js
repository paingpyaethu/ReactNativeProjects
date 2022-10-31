import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

//Custom Themes
import {FONTS, METRICS} from '../../../theme';

const CustomForm = props => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: METRICS._scale(30),
    marginBottom: METRICS._scale(400),
    width: METRICS.width,
  },
  title: {
    fontSize: METRICS._scale(30),
    lineHeight: METRICS._scale(30 * 1.4),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
  },
});

export default CustomForm;
