import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {urlFor} from '../../../../sanity';
import {COLORS, FONTS, METRICS} from '../../../themes';

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: urlFor(imgUrl).url()}} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.titleTxt}>{title}</Text>
        <View style={styles.ratingContainer}>
          <IonIcons
            name="star"
            size={METRICS.width * 0.04}
            color={COLORS.SEMANTIC_YELLOW}
          />
          <Text style={styles.genreTxt}>
            <Text style={styles.ratingTxt}>{rating}</Text> ~ {genre}
          </Text>
        </View>
        <View style={styles.addressContainer}>
          <IonIcons
            name="location-outline"
            size={METRICS.width * 0.05}
            color={COLORS.SEMANTIC_LIGHT}
          />
          <Text style={styles.addressTxt}>Nearby ~ {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: METRICS.width * 0.015,
    marginRight: METRICS.width * 0.03,
    marginBottom: METRICS.width * 0.02,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  subContainer: {
    paddingHorizontal: METRICS.width * 0.02,
    paddingVertical: METRICS.width * 0.03,
  },
  image: {
    width: METRICS.width * 0.6,
    height: METRICS.width * 0.4,
    borderRadius: METRICS.width * 0.015,
  },
  titleTxt: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: METRICS.width * 0.043,
    color: COLORS.NATURAL_DEFAULT,
    marginBottom: METRICS.width * 0.012,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: METRICS.width * 0.01,
  },
  genreTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.032,
    color: COLORS.NATURAL_DARK_GREY,
    marginLeft: METRICS.width * 0.01,
  },
  ratingTxt: {
    color: COLORS.PRIMARY,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.032,
    color: COLORS.NATURAL_DARK_GREY,
    marginLeft: METRICS.width * 0.01,
  },
});
