import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CheckOutItem from '../../components/organisms/Order/Checkout/CheckOutItem';

const CheckOutScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <CheckOutItem navigation={navigation} />
    </SafeAreaView>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});
