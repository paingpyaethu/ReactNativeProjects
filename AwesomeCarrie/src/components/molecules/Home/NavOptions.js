/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS, METRICS} from '../../../themes';

const data = [
  {
    id: 123,
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 456,
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.navOption}>
          <View>
            <Image
              source={{uri: item.image}}
              style={{
                width: METRICS.width * 0.2,
                height: METRICS.width * 0.2,
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.titleTxt}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  navOption: {
    backgroundColor: COLORS.SECONDARY_COLOR,
    padding: METRICS.width * 0.04,
    marginVertical: METRICS.width * 0.04,
    marginLeft: METRICS.width * 0.03,
    borderRadius: METRICS.width * 0.02,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleTxt: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: METRICS.width * 0.035,
    fontWeight: '500',
    marginTop: METRICS.width * 0.01,
  },
});
