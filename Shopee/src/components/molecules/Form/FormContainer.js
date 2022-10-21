import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
//Custom Hook
import {useOrientation} from '../../../hooks/useOrientation';
//Custom Themes
import Metrics from '../../../theme/Metrics';

const FormContainer = props => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      marginTop: Metrics._scale(30),
      marginBottom: Metrics._scale(400),
      width: orientation.width,
      justifyContent: 'center',
      alignContent: 'center',
    },
    title: {
      fontSize: Metrics.style(30),
    },
  });

export default FormContainer;
