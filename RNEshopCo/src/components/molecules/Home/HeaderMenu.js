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
import Colors from '../../../themes/Colors';
import Fonts from '../../../themes/Fonts';
import Metrics from '../../../themes/Metrics';
import Separator from '../../atoms/Separator';

const HeaderMenu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.LIGHT_GREY}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />

      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Feather name="align-left" size={Metrics._scale(30)} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.NORMAL_GREY}
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Feather
            name="search"
            size={Metrics._scale(24)}
            color={Colors.NORMAL_GREY}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Metrics.width,
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
    marginLeft: Metrics._scale(10),
  },
  searchInput: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Metrics.width - Metrics._scale(60),
    padding: Metrics._scale(10),
    marginVertical: Metrics._scale(5),
    marginLeft: Metrics._scale(10),
    borderRadius: Metrics._scale(10),

    fontFamily: Fonts.ROBOTOSLAB_MEDIUM,
    fontSize: Metrics._scale(14),

    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: Metrics._scale(-12),
    right: Metrics._scale(12),
  },
});

export default HeaderMenu;
