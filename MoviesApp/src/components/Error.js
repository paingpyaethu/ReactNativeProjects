import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};

const defaultProps = {
  errorText1: 'Oops! Something went wrong',
  errorText2: 'Make sure you are online and restart the application',
};
const Error = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.errorText1}</Text>
      <Text style={styles.text}>{props.errorText2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'red',
  },
});

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;
export default Error;
