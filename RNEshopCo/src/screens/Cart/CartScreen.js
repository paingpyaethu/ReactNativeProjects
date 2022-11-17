import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.goBack()}>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
