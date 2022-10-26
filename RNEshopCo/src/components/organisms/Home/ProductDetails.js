import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDetails = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(item, null, 2)}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
