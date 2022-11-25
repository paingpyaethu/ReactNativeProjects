/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import sanityClient from '../../../../sanity';
import {COLORS, FONTS, METRICS} from '../../../themes';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]-> {
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]
      `,
        {id},
      )
      .then(data => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleTxt}>{title}</Text>
        <IonIcons
          name="arrow-forward-circle-outline"
          size={METRICS.width * 0.07}
          color={COLORS.PRIMARY}
        />
      </View>
      <Text style={styles.descriptionTxt}>{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}>
        {/* RestaurantCard */}
        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  container: {
    paddingLeft: METRICS.width * 0.03,
    marginBottom: METRICS.width * 0.03,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleTxt: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: METRICS.width * 0.045,
    color: COLORS.NATURAL_DEFAULT,
  },
  descriptionTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.03,
    color: COLORS.NATURAL_DARK_GREY,
  },
  cardContainer: {
    marginTop: METRICS.width * 0.04,
  },
});
