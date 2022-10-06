import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useOrientation} from '../../hooks/useOrientation';

const CustomSearchBar = props => {
  const orientation = useOrientation();
  const styles = responsiveStyle(orientation);

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <Icon name={'search'} size={20} style={styles.searchIcon} />
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
            size={20}
            style={styles.closeIcon}
            onPress={props.onPress}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const responsiveStyle = orientation =>
  StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      marginLeft:
        orientation.isPortrait === true ? 5 : Platform.OS === 'android' ? 5 : 0,
      borderLeftWidth: 8,
      borderRightWidth: 8,
      borderTopWidth: 4,
      borderBottomWidth: 4,
      borderRadius: 10,
      width:
        orientation.isPortrait === true
          ? orientation.width - 10
          : Platform.OS === 'android'
          ? '98.5%'
          : '100%',
      overflow: 'hidden',
    },
    searchIcon: {
      position: 'absolute',
      left: 10,
      color: '#4B4B4B',
    },
    closeIcon: {
      position: 'absolute',
      right: 10,
      color: '#4B4B4B',
    },
    input: {
      height: 30,
      borderColor: '#BBC5D4',
      paddingHorizontal: 30,
      paddingVertical: 2,
    },
  });
export default CustomSearchBar;
