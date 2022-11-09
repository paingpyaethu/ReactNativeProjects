/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './tabs/TabNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {loadJWT} from '../store/services/AuthServices';

const AppNavigator = () => {
  const authContext = useSelector(state => state.auth);
  console.log('AppNavigator::', authContext);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJWT());
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [dispatch]);

  if (isLoading) {
    return (
      <View
        style={{
          backgroundColor: '#f2f2f2',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <TabNavigator
        isAuthenticated={authContext.authenticated}
        isAdmin={authContext.user}
      />
    </NavigationContainer>
  );
};

export default AppNavigator;
