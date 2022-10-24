import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../themes/Colors';
import Fonts from '../../../themes/Fonts';
import Metrics from '../../../themes/Metrics';

const ProductCard = props => {
  const [click, setClick] = useState(false);
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/products/men-fashion-2.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.name}>{props.name}</Text>
        <View style={styles.priceAndRatingContainer}>
          <Text style={styles.price}>${props.price}</Text>
          <Text style={styles.offerPrice}>
            {props.offerPrice > 0 ? '$' + props.offerPrice : null}
          </Text>
          <View style={styles.ratingContainer}>
            <IonIcons
              name="star"
              size={Metrics._scale(18)}
              color={Colors.DEFAULT_YELLOW}
            />
            <Text style={styles.reviewsNum}>({props.numOfReviews})</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          {click ? (
            <TouchableOpacity onPress={() => setClick(!click)}>
              <IonIcons
                name="heart"
                size={Metrics._scale(25)}
                color={Colors.DEFAULT_RED}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setClick(!click)}>
              <IonIcons
                name="heart-outline"
                size={Metrics._scale(25)}
                color={Colors.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          )}

          {props.Stock !== 0 ? (
            <TouchableOpacity>
              <MaterialIcons
                name="add-shopping-cart"
                size={Metrics._scale(25)}
                color={Colors.SECONDARY_COLOR}
                style={{marginLeft: Metrics._scale(8)}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {props.Stock === 0 ? (
          <View style={styles.outOfStock}>
            <Text style={styles.outOfStockText}>Out Of Stock</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: Metrics.width / 2 - Metrics._scale(20),
    height: Metrics.width / 2.1 - Metrics._scale(10),

    marginTop: Metrics._scale(35),
    padding: Metrics._scale(8),

    borderRadius: Metrics._scale(5),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: Metrics._scale(90),
    height: Metrics._scale(90),
    position: 'absolute',
    top: -Metrics._scale(40),
  },
  name: {
    fontFamily: Fonts.ROBOTOSLAB_MEDIUM,
    fontSize: Metrics._scale(15),
    lineHeight: Metrics._scale(15 * 1.4),
    textAlign: 'center',
    marginTop: Metrics._scale(6),
    paddingTop: Metrics._scale(50),
    color: Colors.PRIMARY_COLOR,
  },
  priceAndRatingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -Metrics._scale(15),
  },
  price: {
    fontFamily: Fonts.ROBOTOSLAB_REGULAR,
    fontSize: Metrics._scale(16),
    lineHeight: Metrics._scale(16 * 1.4),
  },
  offerPrice: {
    color: Colors.DEFAULT_RED,
    fontFamily: Fonts.ROBOTOSLAB_LIGHT,
    fontSize: Metrics._scale(14),
    lineHeight: Metrics._scale(14 * 1.4),

    textDecorationLine: 'line-through',
    marginLeft: -Metrics._scale(30),
    marginTop: -Metrics._scale(5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewsNum: {
    fontFamily: Fonts.ROBOTOSLAB_REGULAR,
    fontSize: Metrics._scale(14),
    lineHeight: Metrics._scale(14 * 1.4),
    marginLeft: Metrics._scale(2),
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  outOfStock: {
    width: Metrics._scale(60),
    height: Metrics._scale(60),
    backgroundColor: Colors.DEFAULT_RED,
    borderRadius: Metrics._scale(60),
    position: 'absolute',
    top: -Metrics._scale(10),
    right: -Metrics._scale(10),
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  outOfStockText: {
    color: '#fff',
    fontSize: Metrics._scale(12),
    textAlign: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});

export default ProductCard;
