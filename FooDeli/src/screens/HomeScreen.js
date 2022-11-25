/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import sanityClient from '../../sanity';
import CustomSearch from '../components/molecules/Home/CustomSearch';
import HeaderMenu from '../components/molecules/Home/HeaderMenu';
import Categories from '../components/organisms/Home/Categories';
import FeaturedRow from '../components/organisms/Home/FeaturedRow';

import {COLORS, FONTS, METRICS} from '../themes';

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
          ...,
          restaurants[]-> {
            ...,
            dishes[]->,
          },
        }
    `,
      )
      .then(data => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <HeaderMenu />
      {/* Search */}
      <CustomSearch />

      {/* Body */}
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        {featuredCategories?.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  bodyContainer: {
    backgroundColor: COLORS.NATURAL_LIGHT,
    paddingBottom:
      Platform.OS === 'android' ? METRICS.width * 0.3 : METRICS.width * 0.2,
  },
});
