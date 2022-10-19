import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useOrientation} from '../../hooks/useOrientation';
import Metrics from '../../theme/Metrics';

const CustomSearchBar = props => {
  const orientation = useOrientation();
  const styles = responsiveStyle(orientation);

  return (
    <View style={styles.searchContainer}>
      <Icon
        name={'search'}
        size={Metrics._scale(20)}
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
          size={Metrics._scale(20)}
          style={styles.closeIcon}
          onPress={props.onPress}
        />
      ) : null}
    </View>
  );
};

const responsiveStyle = orientation =>
  StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: Metrics._scale(10),
      marginLeft: Metrics._scale(5),
      borderLeftWidth: Metrics._scale(8),
      borderRightWidth: Metrics._scale(8),
      borderTopWidth: Metrics._scale(4),
      borderBottomWidth: Metrics._scale(4),
      borderRadius: Metrics._scale(10),
      width: orientation.width - Metrics._scale(10),
      overflow: 'hidden',
    },
    searchIcon: {
      position: 'absolute',
      left: Metrics._scale(10),
      color: '#4B4B4B',
    },
    closeIcon: {
      position: 'absolute',
      right: Metrics._scale(10),
      color: '#4B4B4B',
    },
    input: {
      height: Metrics._scale(30),
      borderColor: '#BBC5D4',
      paddingHorizontal: Metrics._scale(30),
      paddingVertical: Metrics._scale(2),
      fontSize: Metrics._scale(13),
      lineHeight: Metrics._scale(13),
    },
  });
export default CustomSearchBar;
