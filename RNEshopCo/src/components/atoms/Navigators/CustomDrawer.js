/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import IonIcons from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, IMAGES, METRICS} from '../../../themes';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../stores/slices/auth/authSlice';
import {getUserData} from '../../../stores/slices/users/userSlice';
import {AxiosContext} from '../../../contexts/AxiosContext';

const CustomDrawer = props => {
  const {authAxios} = useContext(AxiosContext);

  const users = useSelector(state => state.users);
  const userData = users.userData;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(authAxios));
  }, [authAxios, dispatch]);

  const _onLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to logout?', [
      {
        text: 'cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'confrim',
        onPress: () => dispatch(logout()),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={IMAGES.LOGO}
          style={{
            width: '100%',
            height: METRICS.height / 5,
          }}
        />
      </View>
      <View style={styles.userContainer}>
        <Image
          source={{
            uri:
              userData && userData.avatar
                ? userData.avatar.url
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0HxKNuPMWQO_ganSq2rUWUshvqW3mLXoKNo-S_jJ&s',
          }}
          style={styles.userImg}
        />
        <Text style={styles.userText}>{userData && userData.name}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.logoutContainer} onPress={_onLogout}>
        <IonIcons
          name="log-out-outline"
          size={METRICS._scale(20)}
          color={COLORS.DARK_GREY}
        />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: METRICS._scale(50),
    margin: 0,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: METRICS.height / 10,
    height: METRICS.height / 10,
    borderRadius: METRICS.height / 10,
    marginLeft: METRICS._scale(10),
  },
  userText: {
    fontSize: METRICS.height / 50,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    color: COLORS.SECONDARY_COLOR,
    paddingLeft: METRICS._scale(10),
  },

  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: METRICS.width >= 768 ? METRICS._scale(10) : METRICS._scale(20),
    marginBottom: METRICS.width >= 768 ? METRICS._scale(-30) : 0,
  },
  logoutText: {
    color: COLORS.DARK_GREY,
    fontSize: METRICS.height / 50,
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    paddingLeft: METRICS._scale(10),
  },
});
