import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductDetailScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(item, null, 2)}</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
