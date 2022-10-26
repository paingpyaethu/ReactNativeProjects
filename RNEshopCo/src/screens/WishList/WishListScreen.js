import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WishListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WishListScreen</Text>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
