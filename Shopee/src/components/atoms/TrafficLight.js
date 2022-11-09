import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {METRICS} from '../../theme';

const TrafficLight = props => {
  return <View style={[styles.container, {backgroundColor: props.bgColor}]} />;
};

export default TrafficLight;

const styles = StyleSheet.create({
  container: {
    borderRadius: METRICS._scale(50),
    width: METRICS._scale(10),
    height: METRICS._scale(10),
    padding: METRICS._scale(10),
  },
});

// available = afec1a, limited = dde033, unavailable = ec241a
