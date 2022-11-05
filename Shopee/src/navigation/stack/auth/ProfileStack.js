/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../../screens/Auth/LoginScreen';
import RegisterScreen from '../../../screens/Auth/RegisterScreen';
import ProfileScreen from '../../../screens/Auth/ProfileScreen';
import {useDispatch, useSelector} from 'react-redux';
import {loadJWT} from '../../../store/services/AuthServices';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const auth = useSelector(state => state.auth);
  // console.log('Auth from Redux::: ', auth);
  const dispatch = useDispatch();

  const [loaded, setIsLoaded] = useState(true);

  useEffect(() => {
    dispatch(loadJWT());
    setTimeout(() => {
      setIsLoaded(false);
    }, 10);
  }, [dispatch]);

  if (!auth.authenticated && loaded) {
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
    <Stack.Navigator>
      {!auth.authenticated ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default ProfileStack;
