import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  View,
  TextInput,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {METRICS, COLORS, FONTS} from '../../../themes';

import Separator from '../../atoms/Separator';

const HeaderMenu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.LIGHT_GREY}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Feather name="align-left" size={METRICS._scale(30)} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.NORMAL_GREY}
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Feather
            name="search"
            size={METRICS._scale(24)}
            color={COLORS.NORMAL_GREY}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: METRICS.width,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: METRICS._scale(10),
  },
  searchInput: {
    backgroundColor: COLORS.LIGHT_GREY,
    width: METRICS.width - METRICS._scale(60),
    padding: METRICS._scale(10),
    marginVertical: METRICS._scale(5),
    marginLeft: METRICS._scale(10),
    borderRadius: METRICS._scale(10),

    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS._scale(14),

    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: METRICS._scale(-12),
    right: METRICS._scale(12),
  },
});

export default HeaderMenu;
