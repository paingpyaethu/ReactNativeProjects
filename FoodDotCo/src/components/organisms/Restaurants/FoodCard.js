import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {useOrientation} from '../../../hooks/useOrientation';
import {STATIC_IMAGE} from '../../../store/constants/ApiConstants';
import StaticImageService from '../../../store/services/StaticImageService';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import Metrics from '../../../theme/Metrics';

const FoodCard = ({item}) => {
  const [itemCount, setItemCount] = useState(0);

  const orientation = useOrientation();
  const styles = customStyle(orientation);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{
            uri: StaticImageService.getGalleryImage(
              item.image,
              STATIC_IMAGE.SIZE.SQUARE,
            ),
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.detailContainer}>
        <TouchableOpacity>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text numberOfLines={2} style={styles.descriptionText}>
            {item.description}
          </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.priceText}>${item.price}</Text>
          <View style={styles.itemCountContainer}>
            {itemCount > 0 ? (
              <>
                <TouchableOpacity
                  onPress={() => setItemCount(itemCount - 1)}
                  activeOpacity={0.6}>
                  <IonIcons
                    name="remove-circle"
                    size={Metrics._scale(23)}
                    color={Colors.DEFAULT_GREY}
                  />
                </TouchableOpacity>
                <Text style={styles.itemCountText}>{itemCount}</Text>
              </>
            ) : null}
            <TouchableOpacity
              onPress={() => setItemCount(itemCount + 1)}
              activeOpacity={0.6}>
              <IonIcons
                name="add-circle"
                size={Metrics._scale(23)}
                color={Colors.DEFAULT_YELLOW}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: Metrics._scale(8),
      backgroundColor: Colors.LIGHT_GREY,
      marginVertical: Metrics._scale(6),
      padding: Metrics._scale(5),

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    image: {
      width: Metrics._scale(80),
      height: Metrics._scale(80),
      borderRadius: Metrics._scale(8),
      margin: Metrics._scale(5),
    },
    detailContainer: {
      marginLeft: Metrics._scale(15),
    },
    titleText: {
      width: (orientation.width / 100) * 60,
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: Metrics._scale(13),
      lineHeight: Metrics._scale(13 * 1.4),
      marginBottom: Metrics._scale(5),
    },
    descriptionText: {
      width: (orientation.width / 100) * 60,
      color: Colors.DEFAULT_GREY,
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: Metrics._scale(11),
      lineHeight: Metrics._scale(11 * 1.4),
      marginBottom: Metrics._scale(5),
    },

    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    priceText: {
      color: Colors.DEFAULT_YELLOW,
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: Metrics._scale(13),
      lineHeight: Metrics._scale(13 * 1.4),
    },
    itemCountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Metrics._scale(5),
      paddingHorizontal: Metrics._scale(10),
      borderRadius: Metrics._scale(8),
    },
    itemCountText: {
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.POPPINS_MEDIUM,
      fontSize: Metrics._scale(13),
      lineHeight: Metrics._scale(13 * 1.4),
      marginHorizontal: Metrics._scale(8),
    },
  });
export default FoodCard;
