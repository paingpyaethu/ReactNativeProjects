import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useOrientation} from '../../hooks/useOrientation';

import Colors from '../../theme/Colors';
import Separator from '../../components/atoms/Separator';
import Metrics from '../../theme/Metrics';
import Fonts from '../../theme/Fonts';

import HeaderMenu from '../../components/molecules/HeaderMenu';
import {CATEGORIES} from '../../store/constants/Categories';
import CategoryMenuItem from '../../components/molecules/CategoryMenuItem';

import RestaurantService from '../../store/services/RestaurantService';
import {FlashList} from '@shopify/flash-list';
import RestaurantCard from '../../components/molecules/Restaurants/RestaurantCard';

const HomeScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState();
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    const foodotco = navigation.addListener('focus', () => {
      RestaurantService.getRestaurants().then(response => {
        if (response?.status) {
          console.log(response?.data?.data);
          setRestaurants(response?.data?.data);
        }
      });
    });

    return () => {
      foodotco;
    };
  }, [navigation]);

  const orientation = useOrientation();
  const styles = customStyle(orientation);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.PRIMARY_COLOR}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.backgroundCurvedContainer} />

      {/* Header And Search */}
      <HeaderMenu />
      {/* Header And Search */}

      <View style={styles.categoriesContainer}>
        {CATEGORIES.map(({id, name, logo}) => (
          <CategoryMenuItem
            key={id}
            name={name}
            logo={logo}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </View>

      <View style={styles.listContainer}>
        <View style={styles.horizontalListContainer}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderTitle}>Top Rated</Text>
            <Text style={styles.listHeaderSubTitle}>See all</Text>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={item => item._id}
            renderItem={({item}) => <RestaurantCard {...item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.SECONDARY_WHITE,
    },
    backgroundCurvedContainer: {
      backgroundColor: Colors.PRIMARY_COLOR,
      height: Metrics._scale(2000),
      position: 'absolute',
      top: -1 * Metrics._scale(2000 - 230),
      width: Metrics._scale(2000),
      borderRadius: Metrics._scale(2000),
      alignSelf: 'center',
      zIndex: -1,
    },
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

    //CategoryContainer
    categoriesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: Metrics._scale(25),
    },

    //List Section
    listContainer: {
      paddingVertical:
        orientation.width > 768 ? Metrics._scale(30) : Metrics._scale(15),
      zIndex: 1,
    },
    horizontalListContainer: {
      marginTop: Metrics._scale(30),
    },
    listHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: Metrics._scale(20),
      marginBottom: Metrics._scale(5),
    },
    listHeaderTitle: {
      color: Colors.DEFAULT_BLACK,
      fontSize: Metrics._scale(13),
      lineHeight: Metrics._scale(13 * 1.4),
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
    listHeaderSubTitle: {
      color: Colors.DEFAULT_YELLOW,
      fontSize: Metrics._scale(13),
      lineHeight: Metrics._scale(13 * 1.4),
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
  });

export default HomeScreen;
