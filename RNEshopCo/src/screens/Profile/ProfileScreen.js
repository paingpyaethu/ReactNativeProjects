import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Profile from '../../components/organisms/Profile/Profile';
import HeaderMenu from '../../components/molecules/Home/HeaderMenu';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderMenu navigation={navigation} />
      <Profile navigation={navigation} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
