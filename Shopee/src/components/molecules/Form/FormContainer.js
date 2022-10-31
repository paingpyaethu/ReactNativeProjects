import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

//Custom Themes
import {METRICS} from '../../../theme';

const FormContainer = props => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: METRICS._scale(30),
    marginBottom: METRICS._scale(400),
    width: METRICS.width,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: METRICS.style(30),
  },
});

export default FormContainer;
