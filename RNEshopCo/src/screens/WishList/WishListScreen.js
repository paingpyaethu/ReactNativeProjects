import React, {useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Separator from '../../components/atoms/Separator';
import {AxiosContext} from '../../contexts/AxiosContext';
import {removeWishList} from '../../stores/slices/wishlists/wishListSlice';
import {COLORS, FONTS, METRICS} from '../../themes';

const WishListScreen = () => {
  const {wishlists} = useSelector(state => state.wishlists);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} translucent />
      <View style={styles.subContainer}>
        {/* <Text>{JSON.stringify(wishlists, null, 2)}</Text> */}
        <Separator height={StatusBar.currentHeight} />
        {wishlists?.length > 0 ? (
          <View>
            {wishlists.map((wishlist, index) => (
              <View style={styles.listContainer} key={index}>
                <View style={styles.leftContainer}>
                  <Image
                    source={{uri: wishlist.productImage}}
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

                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Add to Cart</Text>
                  </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPriceTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 50,
  },
  btn: {
    backgroundColor: COLORS.DARK_GREY,
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
