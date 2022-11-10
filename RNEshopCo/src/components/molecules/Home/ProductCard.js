import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {METRICS, COLORS, FONTS, ROUTES, IMAGES} from '../../../themes';

const ProductCard = ({product, navigation}) => {
  const [click, setClick] = useState(false);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTES.PRODUCT_DETAIL, {item: product})
      }>
      <Text>{JSON.stringify(product.offerPrice, null, 2)}</Text>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/products/custom-jersey.png')}
          style={styles.image}
        />
        <Text style={styles.name}>
          {product.name.length > 20
            ? product.name.substring(0, 15) + '...'
            : product.name}
        </Text>
        <View style={styles.priceAndRatingContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.offerPrice}>
            {product.offerPrice && product.offerPrice.length > 0
              ? '$' + product.offerPrice
              : null}
          </Text>
          <View style={styles.ratingContainer}>
            <IonIcons
              name="star"
              size={METRICS._scale(18)}
              color={COLORS.DEFAULT_YELLOW}
            />
            <Text style={styles.reviewsNum}>({product.numOfReviews})</Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          {click ? (
            <TouchableOpacity onPress={() => setClick(!click)}>
              <IonIcons
                name="heart"
                size={METRICS._scale(25)}
                color={COLORS.DEFAULT_RED}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setClick(!click)}>
              <IonIcons
                name="heart-outline"
                size={METRICS._scale(25)}
                color={COLORS.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          )}

          {product.Stock !== 0 ? (
            <TouchableOpacity>
              <MaterialIcons
                name="add-shopping-cart"
                size={METRICS._scale(25)}
                color={COLORS.SECONDARY_COLOR}
                style={{marginLeft: METRICS._scale(8)}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {product.Stock === 0 ? (
          <View style={styles.outOfStock}>
            <Text style={styles.outOfStockText}>Out Of Stock</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_GREY,
    width: METRICS.width / 2 - METRICS._scale(11),
    padding: METRICS._scale(15),

    marginLeft: (METRICS.width / 100) * 1.9,
    marginTop: METRICS._scale(50),
    marginBottom: METRICS._scale(20),

    borderRadius: METRICS._scale(5),

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
    width: METRICS._scale(110),
    height: METRICS._scale(110),
    position: 'absolute',
    top: -METRICS._scale(40),
    left: METRICS._scale(10),
  },
  name: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS._scale(15),
    lineHeight: METRICS._scale(15 * 1.4),
    textAlign: 'center',
    marginTop: METRICS._scale(30),
    paddingTop: METRICS._scale(50),
    color: COLORS.PRIMARY_COLOR,
  },
  priceAndRatingContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: METRICS._scale(15),
  },
  price: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS._scale(16),
    lineHeight: METRICS._scale(16 * 1.4),
  },
  offerPrice: {
    color: COLORS.DEFAULT_RED,
    fontFamily: FONTS.ROBOTOSLAB_LIGHT,
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),

    textDecorationLine: 'line-through',
    marginLeft: -METRICS._scale(30),
    marginTop: -METRICS._scale(5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewsNum: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
    marginLeft: METRICS._scale(2),
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  outOfStock: {
    width: METRICS._scale(60),
    height: METRICS._scale(60),
    backgroundColor: COLORS.DEFAULT_RED,
    borderRadius: METRICS._scale(60),
    position: 'absolute',
    top: -METRICS._scale(10),
    right: -METRICS._scale(2),
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
    fontSize: METRICS._scale(12),
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
