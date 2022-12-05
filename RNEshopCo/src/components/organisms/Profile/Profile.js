/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
  ScrollView,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../../stores/slices/auth/authSlice';
import {COLORS, FONTS, METRICS, ROUTES} from '../../../themes';

const Profile = ({navigation}) => {
  const {userData} = useSelector(state => state.users);
  const dispatch = useDispatch();

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
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{uri: userData.avatar.url}} style={styles.image} />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.profileDetail}>
          <Text style={styles.name}>{userData.name.toUpperCase()}</Text>
          <Text style={styles.date}>
            Join On: {userData.createdAt.substr(0, 10)}
          </Text>
        </View>
        <View style={styles.profileOption}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => navigation.navigate(ROUTES.ORDER)}>
            <IonIcons
              name="reader-outline"
              size={METRICS.width * 0.06}
              color={COLORS.PRIMARY_COLOR}
            />
            <Text style={styles.profileOptionTxt}>My Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate(ROUTES.UPDATE_ACCOUNT, {isProfile: false})
            }>
            <IonIcons
              name="open-outline"
              size={METRICS.width * 0.06}
              color={COLORS.PRIMARY_COLOR}
            />
            <Text style={styles.profileOptionTxt}>Change Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileOption}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate(ROUTES.UPDATE_ACCOUNT, {isProfile: true})
            }>
            <IonIcons
              name="settings-outline"
              size={METRICS.width * 0.06}
              color={COLORS.PRIMARY_COLOR}
            />
            <Text style={styles.profileOptionTxt}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => Linking.openURL('https://paingpyaethu.github.io/')}>
            <IonIcons
              name="earth-outline"
              size={METRICS.width * 0.06}
              color={COLORS.PRIMARY_COLOR}
            />
            <Text style={styles.profileOptionTxt}>Developer Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileOption}>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={_onLogout}>
            <IonIcons
              name="log-out-outline"
              size={METRICS.width * 0.06}
              color={COLORS.PRIMARY_COLOR}
            />
            <Text style={styles.profileOptionTxt}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_GREY,
    marginTop: METRICS.width * 0.03,
  },

  imgContainer: {
    alignItems: 'center',
  },
  image: {
    width: METRICS.width * 0.45,
    height: METRICS.width * 0.45,
    borderRadius: METRICS.width * 0.45,
  },

  subContainer: {
    padding: METRICS.width * 0.06,
  },

  profileDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: METRICS.width * 0.1,
  },
  name: {
    color: COLORS.DARK_GREY,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.04,
  },
  date: {
    color: COLORS.DARK_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.035,
  },

  profileOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: METRICS.width * 0.05,
  },
  profileOptionTxt: {
    color: COLORS.SECONDARY_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.032,
    marginTop: METRICS.width * 0.016,
  },
});
