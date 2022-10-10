import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignIn from '../../components/organisms/SignIn/SignIn';

const AuthScreen = ({navigation}) => {
  const [toggle, setToggle] = useState(true);

  return (
    <View style={styles.container}>
      {toggle && <SignIn navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthScreen;
