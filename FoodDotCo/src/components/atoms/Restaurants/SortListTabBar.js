import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../theme/Colors';
import Metrics from '../../../theme/Metrics';
import Fonts from '../../../theme/Fonts';
import SortStyle from './SortStyle';

// const sortStyle = isActive => {
//   isActive
//     ? styles.sortListItem
//     : {...styles.sortListItem, borderBottomColor: Colors.DEFAULT_WHITE};
// };

const SortListTabBar = () => {
  const [activeSortItem, setActiveSortItem] = useState('recent');

  return (
    <View style={styles.sortListContainer}>
      <TouchableOpacity style={styles.sortListItem} activeOpacity={0.8}>
        <Text style={styles.sortListText}>Recent</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sortListItem} activeOpacity={0.8}>
        <Text style={styles.sortListText}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sortListItem} activeOpacity={0.8}>
        <Text style={styles.sortListText}>Rating</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sortListItem} activeOpacity={0.8}>
        <Text style={styles.sortListText}>Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sortListItem} activeOpacity={0.8}>
        <Text style={styles.sortListText}>Trending</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sortListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  sortListItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.DEFAULT_YELLOW,
    height: Metrics._scale(40),
  },
  sortListText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: Metrics._scale(12),
    lineHeight: Metrics._scale(12 * 1.4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
});
export default SortListTabBar;
