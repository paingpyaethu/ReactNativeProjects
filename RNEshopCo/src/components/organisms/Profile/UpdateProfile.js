/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {METRICS, FONTS, COLORS} from '../../../themes';
import CustomInput from '../../molecules/Form/CustomInput';
import LottieView from 'lottie-react-native';

const UpdateProfile = ({
  name,
  setName,
  avatar,
  nameErrMsg,
  userData,
  uploadImage,
  updateProfileHandler,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.updateProfileContainer}>
          <Text style={styles.updateProfileTxt}>Update Your Profile</Text>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={0.4} onPress={uploadImage}>
              <Image
                source={{uri: avatar !== '' ? avatar : userData.avatar.url}}
                style={styles.image}
              />
              <View style={styles.iconContainer}>
                <IonIcons
                  name="camera-outline"
                  size={METRICS.width * 0.06}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
          </View>

          <CustomInput
            label={'Name'}
            iconName={'person-circle-outline'}
            name={'name'}
            value={name}
            onChangeText={text => setName(text)}
            error={nameErrMsg}
          />
          <TouchableOpacity
            onPress={updateProfileHandler}
            activeOpacity={0.7}
            style={styles.BtnWrapper}>
            {isLoading === true ? (
              <LottieView
                source={require('../../../assets/images/reg-login-loading.json')}
                autoPlay
                loop
              />
            ) : (
              <Text style={styles.BtnText}>Update</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  updateProfileContainer: {
    paddingHorizontal: METRICS.width * 0.1,
    marginTop: METRICS.width * 0.05,
  },
  updateProfileTxt: {
    color: COLORS.FOCUS_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.width * 0.05,
    textAlign: 'center',
    marginBottom: METRICS.width * 0.04,
  },
  image: {
    position: 'relative',
    width: METRICS.width * 0.45,
    height: METRICS.width * 0.45,
    borderRadius: METRICS.width * 0.45,
    borderWidth: METRICS.width * 0.005,
  },

  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: METRICS.width * 0.05,

    backgroundColor: COLORS.DEFAULT_GREY,
    borderRadius: METRICS.width * 0.1,
    padding: METRICS.width * 0.01,
  },
  BtnWrapper: {
    backgroundColor: COLORS.FOCUS_COLOR,
    borderRadius: METRICS.width * 0.02,
    height: METRICS.width * 0.11,
    marginTop: METRICS._scale(16),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  BtnText: {
    color: COLORS.LIGHT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width * 0.04,
    lineHeight: METRICS.width * 0.11,
    textAlign: 'center',
  },
});
