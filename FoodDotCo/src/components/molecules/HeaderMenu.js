import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import IconIons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Metrics from '../../theme/Metrics';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';

const HeaderMenu = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <IconIons
            name="location-outline"
            size={Metrics._scale(16)}
            color={Colors.DEFAULT_WHITE}
          />
          <Text style={styles.locationText}>Delivered to</Text>
          <Text style={styles.selectedLocationText}>HOME</Text>
          <IconIons
            name="chevron-down"
            size={Metrics._scale(16)}
            color={Colors.DEFAULT_YELLOW}
          />
        </View>
        <View style={styles.notiContainer}>
          <IconIons
            name="notifications-outline"
            size={Metrics._scale(24)}
            color={Colors.DEFAULT_WHITE}
          />
          <View style={styles.alertBadge}>
            <Text style={styles.alertBadgeText}>17</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
          <IconIons
            name="search-outline"
            size={Metrics._scale(20)}
            color={Colors.DEFAULT_GREY}
          />
          <Text style={styles.searchText}>Search...</Text>
        </View>
        <Feather
          name="sliders"
          size={Metrics._scale(19)}
          color={Colors.DEFAULT_YELLOW}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Metrics._scale(20),
    marginVertical: Metrics._scale(10),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: Metrics._scale(13),
    lineHeight: Metrics._scale(13 * 1.4),
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: Metrics._scale(4),
  },
  selectedLocationText: {
    color: Colors.DEFAULT_YELLOW,
    fontSize: Metrics._scale(14),
    lineHeight: Metrics._scale(14 * 1.4),
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: Metrics._scale(4),
  },

  alertBadge: {
    backgroundColor: Colors.DEFAULT_YELLOW,
    alignItems: 'center',
    borderRadius: Metrics._scale(30),
    width: Metrics._scale(15),
    height: Metrics._scale(15),
    position: 'absolute',
    top: Metrics._scale(-5),
    right: Metrics._scale(-1),
  },
  alertBadgeText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: Metrics._scale(8),
    lineHeight: Metrics._scale(15),
    fontFamily: Fonts.POPPINS_BOLD,
  },

  // SearchContainer
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.DEFAULT_WHITE,
    height: Metrics._scale(40),
    marginHorizontal: Metrics._scale(20),
    paddingHorizontal: Metrics._scale(10),
    borderRadius: Metrics._scale(8),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    color: Colors.DEFAULT_GREY,
    fontSize: Metrics._scale(13),
    lineHeight: Metrics._scale(13 * 1.4),
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: Metrics._scale(10),
  },
});
export default HeaderMenu;
