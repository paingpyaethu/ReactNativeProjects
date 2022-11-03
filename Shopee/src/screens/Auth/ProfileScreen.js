import React, {useContext, useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

// Context
import {BASE_URL} from '../../store/api_endpoint';
import {logout} from '../../store/services/AuthServices';

const ProfileScreen = props => {
  const [userProfile, setUserProfile] = useState();

  const dispatch = useDispatch();

  const signout = () => {
    dispatch(logout());
    console.log('Logout');
  };
  return (
    <>
      <ScrollView>
        <View>
          <Text>ProfileScreen</Text>
          <Text onPress={signout}>Logout</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
