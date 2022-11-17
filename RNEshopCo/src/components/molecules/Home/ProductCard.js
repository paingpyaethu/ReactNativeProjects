import React, {useContext, useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {AxiosContext} from '../../../contexts/AxiosContext';
import {
  addToWishList,
  removeWishList,
} from '../../../stores/slices/wishlists/wishListSlice';

import {METRICS, COLORS, FONTS, ROUTES} from '../../../themes';

const ProductCard = ({product, navigation, wishlists}) => {
  const {authAxios} = useContext(AxiosContext);

  const {userData} = useSelector(state => state.users);
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const [touch, setTouch] = useState(false);
  const [data, setData] = useState('');

  const _wishListHandler = async () => {
    setClick(true);
    const wishlistData = {
      productName: product.name,
      quantity: 1,
      productImage: product.image,
      productPrice: product.price,
      userId: userData._id,
      productId: product._id,
      Stock: product.Stock,
    };
    dispatch(addToWishList(wishlistData, authAxios));
  };

  const _removeWishListHandler = id => {
    setClick(false);
    setTouch(true);
    dispatch(removeWishList(id, authAxios));
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (wishlists && wishlists?.length > 0) {
        wishlists.map(wishlist => {
          setData(wishlist);
          if (wishlist.productId === product._id && touch === false) {
            setClick(true);
          }
        });
      }
    }
    return () => {
      mounted = false;
    };
  }, [product._id, touch, wishlists]);

  // console.log(data);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTES.PRODUCT_DETAIL, {item: product})
      }>
      {/* <Text>{JSON.stringify(wishlists, null, 2)}</Text> */}
      <View style={styles.container}>
        <Image
          source={{
            uri: product.image,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>
          {product.name.length > 15
            ? product.name.substring(0, 15) + '...'
            : product.name}
        </Text>
        <View style={styles.priceAndRatingContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.offerPrice}>
            {product.offerPrice > 0 ? '$' + product.offerPrice : null}
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
            <TouchableOpacity onPress={() => _removeWishListHandler(data._id)}>
              <IonIcons
                name="heart"
                size={METRICS._scale(25)}
                color={COLORS.DEFAULT_RED}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={_wishListHandler}>
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
    width: METRICS.width >= 768 ? METRICS.height / 5 : METRICS.height / 7,
    height: METRICS.width >= 768 ? METRICS.height / 5 : METRICS.height / 7,
    position: 'absolute',
    top: -METRICS._scale(40),
    left: METRICS._scale(10),
  },
  name: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width >= 768 ? METRICS.height / 40 : METRICS.height / 50,

    textAlign: 'center',
    marginTop: METRICS.width >= 768 ? 0 : METRICS._scale(20),
    paddingTop: METRICS._scale(50),
    color: COLORS.PRIMARY_COLOR,
  },
  priceAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: METRICS._scale(15),
  },
  price: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width >= 768 ? METRICS.height / 40 : METRICS.height / 50,
  },
  offerPrice: {
    color: COLORS.DEFAULT_RED,
    fontFamily: FONTS.ROBOTOSLAB_LIGHT,
    fontSize: METRICS.width >= 768 ? METRICS.height / 40 : METRICS.height / 50,

    textDecorationLine: 'line-through',
    marginLeft:
      METRICS.width >= 768 ? METRICS._scale(-40) : -METRICS._scale(20),
    marginTop: -METRICS._scale(5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewsNum: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.width >= 768 ? METRICS.height / 40 : METRICS.height / 50,
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
