import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {FONTS, METRICS} from '../../theme';
const CustomSearchBar = props => {
  return (
    <View style={styles.searchContainer}>
      <Icon
        name={'search'}
        size={METRICS._scale(20)}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={'#343434'}
        onFocus={props.onFocus}
        onChangeText={props.onChangeText}
        keyboardAppearance={'dark'}
      />
      {props.focus === true ? (
        <Icon
          name={'clear'}
          size={METRICS._scale(20)}
          style={styles.closeIcon}
          onPress={props.onPress}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: METRICS._scale(10),
    marginLeft: METRICS._scale(5),
    borderLeftWidth: METRICS._scale(8),
    borderRightWidth: METRICS._scale(8),
    borderTopWidth: METRICS._scale(4),
    borderBottomWidth: METRICS._scale(4),
    borderRadius: METRICS._scale(10),
    width: METRICS.width - METRICS._scale(10),
    overflow: 'hidden',
  },
  searchIcon: {
    position: 'absolute',
    left: METRICS._scale(10),
    color: '#4B4B4B',
  },
  closeIcon: {
    position: 'absolute',
    right: METRICS._scale(10),
    color: '#4B4B4B',
  },
  input: {
    flex: 1,
    height: METRICS._scale(30),
    borderColor: '#BBC5D4',
    paddingHorizontal: METRICS._scale(30),
    paddingVertical: METRICS._scale(2),
    marginLeft: METRICS._scale(8),
    fontSize: METRICS._scale(13),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
});
export default CustomSearchBar;
