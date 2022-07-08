import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './stack/AuthStack';
import DashboardStack from './stack/DashboardStack';
import RNSecureKeyStore from 'react-native-secure-key-store';

import {AuthContext} from '../context/context';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [language, setLanguage] = useState('en');
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    storedData();
  }, []);

  const storedData = () => {
    RNSecureKeyStore.get('user.data').then(
      res => {
        let data = JSON.parse(res);
        if (data) {
          setAuth(true);
          setTimeout(() => {
            setSplashScreen(false);
          }, 2000);
        }
      },
      err => {
        setTimeout(() => {
          setSplashScreen(false);
        }, 2000);
        console.log(err);
      },
    );
  };

  const context = {
    auth,
    language,

    getAuth: value => {
      setAuth(value);
    },
    getLanguages: value => {
      setLanguage(value);
    },
  };
  if (splashScreen) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#a247cd',
        }}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={{width: 70, height: 70, marginBottom: heightPercentageToDP(3)}}
        />
        <Text style={{fontWeight: 'bold', color: '#000'}}>Paing Pyae Thu</Text>
      </View>
    );
  } else if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default AppNavigator;
