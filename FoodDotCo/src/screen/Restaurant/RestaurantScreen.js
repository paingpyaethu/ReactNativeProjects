/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {useOrientation} from '../../hooks/useOrientation';

import {STATIC_IMAGE} from '../../store/constants/ApiConstants';
import RestaurantService from '../../store/services/RestaurantService';
import StaticImageService from '../../store/services/StaticImageService';

import Separator from '../../components/atoms/Separator';
import CategoryListItem from '../../components/molecules/Restaurants/CategoryListItem';
import CategoryListHeader from '../../components/atoms/Restaurants/CategoryListHeader';
import CategoryListFooter from '../../components/atoms/Restaurants/CategoryListFooter';

import Colors from '../../theme/Colors';
import Metrics from '../../theme/Metrics';
import Fonts from '../../theme/Fonts';
import Images from '../../theme/Images';
import FoodCard from '../../components/organisms/Restaurants/FoodCard';

const RestaurantScreen = ({navigation, route}) => {
  const {restaurantId} = route.params;

  const [restaurant, setRestaurant] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const orientation = useOrientation();
  const styles = customStyle(orientation);

  useEffect(() => {
    RestaurantService.getOneRestaurantById(restaurantId).then(response => {
      setSelectedCategory(response?.data?.data?.categories[0]);
      setRestaurant(response?.data?.data);
    });
  }, [restaurantId]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <>
        <Image
          source={{
            uri: StaticImageService.getGalleryImage(
              restaurant?.images?.cover,
              STATIC_IMAGE.SIZE.SQUARE,
            ),
          }}
          style={styles.backgroundImage}
        />
        <ScrollView>
          <Separator height={(orientation.height / 100) * 35} />
          {/* <Text>{JSON.stringify(restaurant, null, 2)}</Text> */}

          <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{restaurant?.name}</Text>
              <IonIcons
                name="bookmark-outline"
                size={Metrics._scale(23)}
                color={Colors.DEFAULT_YELLOW}
              />
            </View>
            <Text style={styles.tagText}>{restaurant?.tags?.join(' • ')}</Text>
            <View style={styles.ratingReviewsContainer}>
              <IonIcons
                name="star"
                size={Metrics._scale(17)}
                color={Colors.DEFAULT_YELLOW}
              />
              <Text style={styles.ratingText}>4.9</Text>
              <Text style={styles.reviewsText}>200+ Reviews</Text>
            </View>
            <View style={styles.deliveryDetailsContainer}>
              <View style={styles.rowAndCenter}>
                <Image
                  style={styles.deliveryDetailIcon}
                  source={Images.DELIVERY_CHARGE}
                />
                <Text style={styles.deliveryDetailText}>Free Delivery</Text>
              </View>
              <View style={styles.rowAndCenter}>
                <Image
                  style={styles.deliveryDetailIcon}
                  source={Images.DELIVERY_TIME}
                />
                <Text style={styles.deliveryDetailText}>
                  {restaurant?.time} min
                </Text>
              </View>
              <View style={styles.restaurantType}>
                <Text style={styles.restaurantTypeText}>
                  {restaurant?.type}
                </Text>
              </View>
            </View>

            <View style={styles.categoriesContainer}>
              <FlatList
                data={restaurant?.categories}
                keyExtractor={item => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={<CategoryListHeader />}
                ListFooterComponent={<CategoryListFooter />}
                renderItem={({item}) => (
                  <CategoryListItem
                    name={item}
                    isActive={item === selectedCategory}
                    selectCategory={category => setSelectedCategory(category)}
                  />
                )}
              />
            </View>
            <View style={styles.foodList}>
              {restaurant?.foods
                ?.filter(food => food?.category === selectedCategory)
                .map(item => (
                  <FoodCard key={item?.id} item={item} />
                ))}
              <Separator height={(orientation.height / 100) * 2} />
            </View>
          </View>
        </ScrollView>
      </>
    </View>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      height: (orientation.width / 100) * 100,
      width: (orientation.width / 100) * 100,
    },
    mainContainer: {
      backgroundColor: Colors.DEFAULT_WHITE,
      borderTopRightRadius: Metrics._scale(30),
      borderTopLeftRadius: Metrics._scale(30),
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: Metrics._scale(24),
      marginTop: Metrics._scale(14),
    },
    title: {
      fontSize: Metrics._scale(22),
      lineHeight: Metrics._scale(22 * 1.4),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      color: Colors.DEFAULT_BLACK,
    },
    tagText: {
      marginHorizontal: Metrics._scale(24),
      marginTop: Metrics._scale(5),
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(12 * 1.4),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      color: Colors.DEFAULT_GREY,
    },
    ratingReviewsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: Metrics._scale(24),
      marginTop: Metrics._scale(10),
    },
    ratingText: {
      marginLeft: Metrics._scale(5),
      fontSize: Metrics._scale(13),
      lineHeight: Metrics._scale(13 * 1.4),
      fontFamily: Fonts.POPPINS_BOLD,
      color: Colors.DEFAULT_BLACK,
    },
    reviewsText: {
      marginLeft: Metrics._scale(5),
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(12 * 1.4),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_BLACK,
    },
    deliveryDetailsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: Metrics._scale(24),
      marginTop: Metrics._scale(10),
      justifyContent: 'space-between',
    },
    deliveryDetailText: {
      marginLeft: Metrics._scale(5),
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(12 * 1.4),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_BLACK,
    },
    deliveryDetailIcon: {
      height: Metrics._scale(16),
      width: Metrics._scale(16),
    },
    rowAndCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    restaurantType: {
      backgroundColor: Colors.LIGHT_YELLOW,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: Metrics._scale(10),
      paddingVertical: Metrics._scale(4),
      borderRadius: Metrics._scale(8),
    },
    restaurantTypeText: {
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(12 * 1.4),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_YELLOW,
    },

    categoriesContainer: {
      marginVertical: Metrics._scale(15),
    },
    foodList: {
      marginHorizontal: Metrics._scale(15),
    },
  });

export default RestaurantScreen;
