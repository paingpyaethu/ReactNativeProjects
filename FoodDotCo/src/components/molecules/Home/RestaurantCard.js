import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';
import {useOrientation} from '../../../hooks/useOrientation';
import StaticImageService from '../../../store/services/StaticImageService';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import Metrics from '../../../theme/Metrics';

const RestaurantCard = ({item, navigate}) => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigate(item.id)}>
      <Image
        source={{uri: StaticImageService.getPoster(item.images.poster)}}
        style={styles.posterStyle}
      />
      <Text style={styles.titleText}>{item.name}</Text>
      <Text style={styles.tagText}>{item.tags.join(' * ')}</Text>
      <View style={styles.footerContainer}>
        <View style={styles.ratingContainer}>
          <IonIcons
            name="star"
            size={Metrics._scale(14)}
            color={Colors.DEFAULT_YELLOW}
          />
          <Text style={styles.ratingText}>4.8</Text>
          <Text style={styles.reviewText}>(150)</Text>
        </View>
        <View style={styles.timeDistanceContainer}>
          <View style={styles.timeDistance}>
            <IonIcons
              name="location-outline"
              size={Metrics._scale(14)}
              color={Colors.DEFAULT_YELLOW}
            />
            <Text style={styles.timeDistanceText}>
              {item.distance / 1000}km
            </Text>
          </View>
          <View style={styles.timeDistance}>
            <IonIcons
              name="time-outline"
              size={Metrics._scale(14)}
              color={Colors.DEFAULT_YELLOW}
            />
            <Text style={styles.timeDistanceText}>{item.time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: Colors.DEFAULT_WHITE,
      borderRadius: Metrics._scale(10),
      marginBottom: 20,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    posterStyle: {
      width: Metrics._scale(1920 * 0.15),
      height: Metrics._scale(1000 * 0.15),
      borderRadius: Metrics._scale(10),
      margin: Metrics._scale(10),
    },
    titleText: {
      fontSize: Metrics._scale(16),
      lineHeight: Metrics._scale(16 * 1.4),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      color: Colors.DEFAULT_BLACK,
      marginLeft: Metrics._scale(10),
    },
    tagText: {
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(12 * 1.4),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      color: Colors.DEFAULT_GREY,
      marginLeft: Metrics._scale(10),
    },

    //FooterContainer
    footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: Metrics._scale(8),
      marginLeft: Metrics._scale(10),
      marginBottom: Metrics._scale(10),
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      marginLeft: Metrics._scale(4),
      color: Colors.DEFAULT_BLACK,
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(12 * 1.4),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
    },
    reviewText: {
      marginLeft: Metrics._scale(2),
      color: Colors.DEFAULT_BLACK,
      fontSize: Metrics._scale(10),
      lineHeight: Metrics._scale(10 * 1.4),
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
    timeDistanceContainer: {
      flexDirection: 'row',
    },
    timeDistance: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: Metrics._scale(10),
      backgroundColor: Colors.LIGHT_YELLOW,
      paddingHorizontal: Metrics._scale(6),
      paddingVertical: Metrics._scale(4),
      borderRadius: Metrics._scale(12),
    },
    timeDistanceText: {
      marginLeft: Metrics._scale(4),
      color: Colors.DEFAULT_YELLOW,
      fontSize: Metrics._scale(10),
      lineHeight: Metrics._scale(10 * 1.4),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
    },
  });
export default RestaurantCard;
