import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Toast from 'react-native-toast-message';

import {useDispatch, useSelector} from 'react-redux';
import Separator from '../../components/atoms/Separator';
import {AxiosContext} from '../../contexts/AxiosContext';
import {addToCart} from '../../stores/slices/carts/cartSlice';
import {removeWishList} from '../../stores/slices/wishlists/wishListSlice';
import {COLORS, FONTS, METRICS} from '../../themes';

const WishListScreen = () => {
  const {authAxios} = useContext(AxiosContext);
  const {wishlistData} = useSelector(state => state.wishlists);
  const {cartData} = useSelector(state => state.carts);
  const {userData} = useSelector(state => state.users);

  const [itemId, setItemId] = useState([]);

  // const cartId = [];

  // cartData.map(item => {
  //   cartId.push(item.productId);
  // });

  console.log('CartItemId:::>>', itemId);

  // cartId.map(i => console.log('mappingCardId', i));

  const dispatch = useDispatch();

  const _addToCartHandler = (
    productName,
    productImage,
    productPrice,
    userId,
    productId,
    Stock,
  ) => {
    const addToCartData = {
      productName: productName,
      quantity: 1,
      productImage: productImage,
      productPrice: productPrice,
      userId: userId,
      productId: productId,
      Stock: Stock,
    };

    if (Stock === 0 || productId === itemId) {
      Toast.show({
        type: 'error',
        text1:
          productId === itemId
            ? `${productName} already have in cart`
            : `${productName} out of stock`,
        position: 'bottom',
        visibilityTime: 3000,
      });
    } else {
      dispatch(addToCart(addToCartData, authAxios));
    }
  };

  useEffect(() => {
    cartData.map(item => {
      setItemId(item.productId);
    });
  }, [cartData]);

  // console.log('CartItemId:::>>', cartId);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} translucent />
      <View style={styles.subContainer}>
        {/* <Text>{JSON.stringify(wishlistData, null, 2)}</Text> */}
        <Separator height={StatusBar.currentHeight} />
        {wishlistData?.length > 0 ? (
          <View>
            {wishlistData.map((wishlist, index) => (
              <View style={styles.listContainer} key={index}>
                <View style={styles.leftContainer}>
                  {/* <Text>{JSON.stringify(wishlist, null, 2)}</Text> */}
                  <Image
                    source={{
                      uri: 'https://rn-eshopcor.herokuapp.com/public/uploads/1667143362058.png',
                    }}
                    style={styles.image}
                  />
                  <Text style={styles.productNameTxt}>
                    {wishlist.productName}
                  </Text>
                </View>

                <View style={styles.rightContainer}>
                  <Text style={styles.productPriceTxt}>
                    ${wishlist.productPrice}
                  </Text>
                  {wishlist.Stock !== 0 ? (
                    <TouchableOpacity
                      style={styles.btn}
                      disabled={wishlist.isDisabled}
                      onPress={() =>
                        _addToCartHandler(
                          wishlist.productName,
                          wishlist.productImage,
                          wishlist.productPrice,
                          userData._id,
                          wishlist._id,
                          wishlist.Stock,
                        )
                      }>
                      <Text style={styles.btnTxt}>Add To Cart</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity style={styles.disableBtn} disabled={true}>
                      <Text style={styles.btnTxt}>Out of Stock</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.emptyWishlist}>
            <Text style={styles.emptyWishlistTxt}>
              Your wishList is empty 😢
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY,
  },
  emptyWishlist: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyWishlistTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 60,
    color: COLORS.DEFAULT_RED,
  },

  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: METRICS._scale(10),
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: METRICS.height / 15,
    height: METRICS.height / 15,
  },
  productNameTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 60,
    marginLeft: METRICS._scale(12),
  },

  rightContainer: {
    alignItems: 'center',
  },
  productPriceTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 50,
    marginBottom: METRICS.width * 0.02,
  },
  btn: {
    backgroundColor: COLORS.DARK_GREY,
    paddingHorizontal: METRICS._scale(10),
    paddingVertical: METRICS._scale(5),
    marginLeft: METRICS._scale(12),

    borderRadius: METRICS._scale(5),
  },
  disableBtn: {
    backgroundColor: COLORS.DEFAULT_GREY,
    paddingHorizontal: METRICS._scale(10),
    paddingVertical: METRICS._scale(5),
    marginLeft: METRICS._scale(12),

    borderRadius: METRICS._scale(5),
  },
  btnTxt: {
    color: COLORS.LIGHT_GREY,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 60,
  },
});
