import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  // const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   });
  // }, []);
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#fff',
  },
});
