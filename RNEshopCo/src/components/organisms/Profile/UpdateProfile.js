import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {METRICS, FONTS, COLORS} from '../../../themes';
import CustomInput from '../../molecules/Form/CustomInput';

const UpdateProfile = ({name, setName, updateProfileHandler}) => {
  return (
    <View style={styles.container}>
      <View style={styles.changePwdContainer}>
        <Text style={styles.changePwdTxt}>Update Your Profile</Text>
        <CustomInput
          label={'Name'}
          iconName={'person-circle-outline'}
          name={'name'}
          value={name}
          onChangeText={text => setName(text)}
          // error={pwdErrMsg ? pwdErrMsg : oldPwdErrMsg}
        />
        <TouchableOpacity
          onPress={updateProfileHandler}
          activeOpacity={0.7}
          style={styles.BtnWrapper}>
          <Text style={styles.BtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    height: METRICS.height,
  },
  changePwdContainer: {
    height: METRICS.height / 1.2,
    justifyContent: 'center',
    paddingHorizontal: METRICS.width * 0.1,
  },
  changePwdTxt: {
    color: COLORS.FOCUS_COLOR,
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.width * 0.05,
    textAlign: 'center',
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
