import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../../screens/Auth/LoginScreen';
import RegisterScreen from '../../../screens/Auth/RegisterScreen';
import ProfileScreen from '../../../screens/Auth/ProfileScreen';
import {useDispatch, useSelector} from 'react-redux';
import {loadJWT} from '../../../store/services/AuthServices';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const auth = useSelector(state => state.auth);
  console.log('Auth from Redux::: ', auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJWT());
  }, [dispatch]);
  return (
    <Stack.Navigator>
      {auth.authenticated ? (
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
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
            // options={{
            //   headerShown: false,
            // }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileStack;
