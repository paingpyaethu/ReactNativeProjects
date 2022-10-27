import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import IonIcons from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, METRICS} from '../../../themes';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={require('../../../assets/images/logo/user_avatar.png')}
          style={styles.userImg}
        />
        <Text style={styles.userText}>Paing Pyae Thu</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.logoutContainer}>
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
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: METRICS._scale(60),
    height: METRICS._scale(60),
    borderRadius: METRICS._scale(60 / 2),
    marginLeft: METRICS._scale(10),
  },
  userText: {
    fontSize: METRICS._scale(14),
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    color: COLORS.SECONDARY_COLOR,
    paddingLeft: METRICS._scale(10),
  },

  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: METRICS.width >= 768 ? METRICS._scale(10) : METRICS._scale(20),
  },
  logoutText: {
    color: COLORS.DARK_GREY,
    fontSize: METRICS._scale(14),
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    paddingLeft: METRICS._scale(10),
  },
});
