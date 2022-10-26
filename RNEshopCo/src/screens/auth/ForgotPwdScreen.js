import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ForgotPwdScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.goBack()}>ForgotPwdScreen</Text>
    </View>
  );
};

export default ForgotPwdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
