/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {urlFor} from '../../sanity';
import CartPopUp from '../components/organisms/Restaurant/CartPopUp';
import DishCard from '../components/organisms/Restaurant/DishCard';
import {setRestaurant} from '../store/slices/restaurants/restaurantSlice';
import {COLORS, FONTS, METRICS} from '../themes';

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  const items = useSelector(state => state.carts.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
      }),
    );
  }, [dispatch]);

  return (
    <>
      <CartPopUp />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{position: 'relative'}}>
          <Image source={{uri: urlFor(imgUrl).url()}} style={styles.image} />
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.7}
            onPress={navigation.goBack}>
            <IonIcons
              name="arrow-back"
              size={METRICS.width * 0.06}
              color={COLORS.PRIMARY}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <View style={{paddingHorizontal: METRICS.width * 0.03}}>
            <Text style={styles.titleTxt}>{title}</Text>
            <View style={styles.ratingContainer}>
              <IonIcons
                name="star"
                size={METRICS.width * 0.05}
                color={COLORS.SEMANTIC_YELLOW}
              />
              <Text style={styles.genreTxt}>
                <Text style={styles.ratingTxt}>{rating}</Text> ~ {genre}
              </Text>
              <IonIcons
                name="location-outline"
                size={METRICS.width * 0.05}
                color={COLORS.SEMANTIC_LIGHT}
              />
              <Text style={styles.addressTxt}>Nearby ~ {address}</Text>
            </View>
            <Text style={styles.shortDescription}>{short_description}</Text>
          </View>

          <TouchableOpacity style={styles.allergyContainer}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <IonIcons
                name="ios-help-circle-outline"
                size={METRICS.width * 0.05}
                color={COLORS.NATURAL_DEFAULT}
              />
              <Text style={styles.allergyTxt}>Have a food allergy?</Text>
            </View>
            <IonIcons
              name="chevron-forward"
              size={METRICS.width * 0.05}
              color={COLORS.PRIMARY}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingBottom: items.length === 0 ? null : METRICS.width * 0.2,
          }}>
          <Text style={styles.menuTxt}>Menu</Text>

          {dishes.map(dish => (
            <DishCard
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: METRICS.width,
    height: METRICS.width * 0.5,
  },
  icon: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? METRICS.width * 0.1 : METRICS.width * 0.05,
    left: METRICS.width * 0.04,

    backgroundColor: '#fff',
    borderRadius: METRICS.width * 0.1,
    padding: METRICS.width * 0.02,
  },
  infoContainer: {
    backgroundColor: '#fff',
  },
  titleTxt: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: METRICS.width * 0.06,
    lineHeight: METRICS.width * 0.12,
    color: COLORS.NATURAL_DEFAULT,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: METRICS.width * 0.01,
  },
  genreTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.032,
    lineHeight: METRICS.width * 0.064,
    color: COLORS.NATURAL_DARK_GREY,
    marginHorizontal: METRICS.width * 0.01,
  },
  ratingTxt: {
    color: COLORS.PRIMARY,
  },
  addressTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.032,
    lineHeight: METRICS.width * 0.064,
    color: COLORS.NATURAL_DARK_GREY,
  },
  shortDescription: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: METRICS.width * 0.035,
    color: COLORS.NATURAL_DARK_GREY,
    marginBottom: METRICS.width * 0.03,
  },
  allergyContainer: {
    flexDirection: 'row',
    borderTopColor: COLORS.NATURAL_GREY,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.NATURAL_GREY,
    padding: METRICS.width * 0.03,
  },
  allergyTxt: {
    color: COLORS.NATURAL_DEFAULT,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.035,
    marginLeft: METRICS.width * 0.03,
  },

  menuTxt: {
    color: COLORS.NATURAL_DEFAULT,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: METRICS.width * 0.05,
    paddingHorizontal: METRICS.width * 0.03,
    paddingVertical: METRICS.width * 0.04,
  },
});
