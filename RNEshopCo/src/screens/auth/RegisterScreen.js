import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../themes';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.goBack()}>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GREY,
  },
});
