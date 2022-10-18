import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import StaticImageService from '../../../store/services/StaticImageService';
import Images from '../../../theme/Images';
import Fonts from '../../../theme/Fonts';
import Colors from '../../../theme/Colors';
import Metrics from '../../../theme/Metrics';

const SortListItemCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: StaticImageService.getLogo(data.images.logo)}}
          style={styles.posterStyle}
        />
      </View>
      <View style={styles.labelContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{data.name}</Text>
          <View style={styles.rowAndCenter}>
            {/* <FontAwesome /> */}
            <Text style={styles.ratingText}>4.2</Text>
            <Text style={styles.reviewsText}>({233})</Text>
          </View>
        </View>
        <Text style={styles.tagsText}>{data.tags?.join(' • ')}</Text>
        <View style={styles.deliveryDetailsContainer}>
          <View style={styles.rowAndCenter}>
            <Image
              source={Images.DELIVERY_CHARGE}
              style={styles.deliveryDetailsIcon}
            />
            <Text style={styles.deliveryDetailsText}>Free Delivery</Text>
          </View>
          <View style={styles.rowAndCenter}>
            <Image
              source={Images.DELIVERY_TIME}
              style={styles.deliveryDetailsIcon}
            />
            <Text style={styles.deliveryDetailsText}>{data.time} min</Text>
          </View>
          <View style={styles.rowAndCenter}>
            <Image style={styles.deliveryDetailsIcon} />
            <Text style={styles.deliveryDetailsText}>{data.distance}m</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Metrics._scale(15),
    borderRadius: Metrics._scale(8),
    backgroundColor: Colors.DEFAULT_WHITE,
    marginTop: Metrics._scale(6),
    padding: Metrics._scale(5),

    shadowColor: Colors.DARK_ONE,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  posterStyle: {
    width: Metrics._scale(60),
    height: Metrics._scale(60),
    borderRadius: Metrics._scale(10),
    margin: Metrics._scale(5),
  },
  labelContainer: {
    flex: 1,
    marginHorizontal: Metrics._scale(8),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliveryDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: Metrics._scale(14),
    lineHeight: Metrics._scale(14 * 1.4),
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
    marginBottom: Metrics._scale(5),
  },
  tagsText: {
    fontSize: Metrics._scale(11),
    lineHeight: Metrics._scale(11 * 1.4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_GREY,
    marginBottom: Metrics._scale(7),
  },
  deliveryDetailsText: {
    marginLeft: Metrics._scale(3),
    fontSize: Metrics._scale(12),
    lineHeight: Metrics._scale(12 * 1.4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  deliveryDetailsIcon: {
    height: Metrics._scale(16),
    width: Metrics._scale(16),
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: Metrics._scale(10),
    lineHeight: Metrics._scale(10 * 1.4),
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  reviewsText: {
    fontSize: Metrics._scale(10),
    lineHeight: Metrics._scale(10 * 1.4),
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_BLACK,
  },
});

export default SortListItemCard;
