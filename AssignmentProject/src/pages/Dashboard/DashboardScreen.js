import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import styles from './dashboardStyle';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils';

const DashboardScreen = navigation => {
  const [userData, setUserData] = useState([]);

  const {getAuth} = useContext(AuthContext);

  useEffect(() => {
    appStorage.getUserData('user.data').then(res => {
      let data = JSON.parse(res);
      console.log('UserData : ', data);
      setUserData(data);
    });
  }, []);

  const logoutHandler = () => {
    appStorage.getRemoveUserData('user.data').then(res => {
      if (res) {
        getAuth(false);
      }
    });
  };

  const backHandler = () => {
    getAuth(false);
  };

  return (
    <View style={styles.dashboardContainer}>
      <View style={[styles.cardContainer, styles.elevation]}>
        <View style={styles.textContainer}>
          <Text style={styles.textUser}>Paing Pyae Thu</Text>
          <Text style={styles.textEmail}>
            Email {'->'}{' '}
            <Text style={{color: 'green'}}>{userData.userEmail}</Text>
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={backHandler}
          activeOpacity={0.5}
          style={[
            styles.buttonContainer,
            {marginRight: widthPercentageToDP(3), backgroundColor: '#f3cf7a'},
          ]}>
          <Text style={[styles.buttonText, {color: '#000'}]}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={logoutHandler}
          activeOpacity={0.5}
          style={[styles.buttonContainer]}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;
