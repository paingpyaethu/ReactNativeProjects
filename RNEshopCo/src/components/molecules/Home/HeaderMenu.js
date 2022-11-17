/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  View,
  TextInput,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {METRICS, COLORS, FONTS, ROUTES} from '../../../themes';

import Separator from '../../atoms/Separator';
import SearchedProduct from '../../organisms/Products/SearchedProduct';

const HeaderMenu = ({navigation, value, onChangeText}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.LIGHT_GREY}
          translucent
        />
        <Separator height={StatusBar.currentHeight} />

        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather
              name="align-left"
              size={
                METRICS.width >= 768 ? METRICS.height / 20 : METRICS.height / 30
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            placeholderTextColor={COLORS.NORMAL_GREY}
            value={value}
            onChangeText={onChangeText}
            style={styles.searchInput}
          />
          <TouchableOpacity>
            <Feather
              name="search"
              size={
                METRICS.width >= 768 ? METRICS.height / 30 : METRICS.height / 40
              }
              color={COLORS.NORMAL_GREY}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        {/* <Text>{JSON.stringify(products, null, 2)}</Text> */}
      </SafeAreaView>
    </>
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
    fontSize: METRICS.width >= 768 ? METRICS.height / 50 : METRICS.height / 60,

    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: METRICS.width >= 768 ? METRICS._scale(-8) : METRICS._scale(-10),
    right: METRICS._scale(12),
  },

  // Searched Products
  searchedProductContainer: {
    flex: 1,
    position: 'absolute',
    width: METRICS.width,
    left: 0,
    top: METRICS.height / 5 - 60,
    zIndex: 100,
    height: METRICS.height * 2,
    backgroundColor: 'rgba(61, 107, 115, 0.80)',
    // paddingVertical: 10,
  },
  searchedProductList: {
    flex: 1,
    backgroundColor: 'red',
    // height: METRICS.height,
    marginVertical: METRICS._scale(15),
    marginHorizontal: METRICS._scale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: METRICS.height / 20,
    width: METRICS.height / 20,
  },
  searchedProductName: {
    color: '#fff',
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 60,
    paddingLeft: METRICS._scale(20),
  },
});

export default HeaderMenu;
