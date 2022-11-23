import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useEffect} from 'react';
import {
  getCartData,
  removeSingleCartData,
  updateCart,
} from '../../stores/slices/carts/cartSlice';
import {AxiosContext} from '../../contexts/AxiosContext';
import {COLORS, FONTS, METRICS} from '../../themes';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default function Cart({navigation}) {
  const {authAxios} = useContext(AxiosContext);
  const {cartData} = useSelector(state => state.carts);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // decrease quantity
  const _decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // dispatch(updateCart(id, quantity - 1));
    }
  };

  // // increase quantity
  const _increaseQty = id => {
    let qtyData = {
      quantity: quantity + 1,
    };
    setQuantity(quantity + 1);
    dispatch(updateCart(id, qtyData, authAxios));
    // dispatch(updateCart(id, quantity + 1));
  };

  // remove item from cart
  const _deleteSingleCartHandler = id => {
    Alert.alert('Warning!', 'Are you sure to delete this item?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => dispatch(removeSingleCartData(id, authAxios)),
      },
    ]);
  };

  // useEffect(() => {
  //   // setTotalPrice(
  //   //   cartData.reduce(
  //   //     (total, item) => total + item.productPrice * item.quantity,
  //   //     0,
  //   //   ),
  //   // );
  //   if (cartData.length > 0) {
  //     cartData.map(item => {
  //       setQuantity(item.quantity);
  //     });
  //   }
  // }, [cartData]);
  useEffect(() => {
    if (cartData.length > 0) {
      cartData.map(item => {
        setQuantity(item.quantity);
      });
    }
  }, [cartData]);

  return (
    <SafeAreaView>
      {cartData && cartData.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: METRICS._scale(17),
          }}>
          {cartData &&
            cartData.map((items, index) => (
              <View style={styles.cartList} key={index}>
                {/* <Text>{JSON.stringify(items, null, 2)}</Text> */}
                <Image
                  source={{
                    uri: 'https://rn-eshopcor.herokuapp.com/public/uploads/1667143362058.png',
                  }}
                  style={styles.image}
                />
                <View style={styles.itemCard}>
                  <View style={styles.productNameContainer}>
                    <Text style={styles.productName}>{items.productName}</Text>
                    <TouchableOpacity
                      style={styles.deleteBtn}
                      onPress={() => _deleteSingleCartHandler(items._id)}>
                      <IonIcons
                        name="trash-outline"
                        size={
                          METRICS.width >= 768
                            ? METRICS.width * 0.04
                            : METRICS.width * 0.05
                        }
                        color={'#fff'}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.logoTxt}>{'RN-Eshop'}</Text>

                  {/* Price */}
                  <View style={styles.productPriceContainer}>
                    <Text style={styles.productPrice}>
                      ${items.productPrice * quantity}
                    </Text>

                    {/* quantity */}
                    <View style={styles.quantityBox}>
                      <TouchableOpacity onPress={() => _decreaseQty(items._id)}>
                        <IonIcons
                          name="remove-circle"
                          size={
                            METRICS.width >= 768
                              ? METRICS.width * 0.04
                              : METRICS.width * 0.05
                          }
                          color={COLORS.DEFAULT_GREY}
                        />
                      </TouchableOpacity>
                      <Text style={styles.quantityTxt}>
                        {quantity.toString()}
                      </Text>
                      <TouchableOpacity onPress={() => _increaseQty(items._id)}>
                        <IonIcons
                          name="add-circle"
                          size={
                            METRICS.width >= 768
                              ? METRICS.width * 0.04
                              : METRICS.width * 0.05
                          }
                          color={COLORS.DEFAULT_GREY}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          <View style={styles.footerContainer}>
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPricelabel}>Total Price:</Text>
              <Text style={styles.totalPriceTxt}>${totalPrice}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.checkoutBtn}
                onPress={() => navigation.navigate('OrderScreen')}>
                <Text style={styles.checkoutTxt}>Go to Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            height: height * 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#333', fontSize: 20, textAlign: 'center'}}>
            Your Cart is empty 😢
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cartList: {
    width: width * 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: METRICS.width * 0.14,
    paddingVertical: width * 0.05,
  },
  itemCard: {
    backgroundColor: '#fff',
    width: METRICS.width - METRICS.width * 0.2,
    borderRadius: METRICS._scale(4),
    paddingLeft: METRICS.width * 0.15,
    paddingRight: METRICS.width * 0.03,
    paddingVertical: METRICS.width * 0.03,
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
    width: METRICS.width * 0.2,
    height: METRICS.width * 0.2,
    position: 'absolute',
    top: 0,
    left: METRICS.width * 0.07,
    zIndex: 1,
  },
  productNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productName: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.035 : METRICS.width * 0.04,
    color: COLORS.SECONDARY_COLOR,
    marginBottom: METRICS._scale(5),
  },
  logoTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.02 : METRICS.width * 0.025,
    color: COLORS.DARK_GREY,
    marginBottom: METRICS._scale(5),
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.035 : METRICS.width * 0.04,
    color: COLORS.PRIMARY_COLOR,
  },
  quantityBox: {
    width: METRICS.width >= 768 ? METRICS.width * 0.23 : METRICS.width * 0.25,
    height: METRICS.width >= 768 ? METRICS.width * 0.07 : METRICS.width * 0.08,
    backgroundColor: '#fff',
    borderColor: COLORS.DEFAULT_GREY,
    borderWidth: METRICS._scale(1),
    borderRadius: METRICS._scale(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  quantityTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.035 : METRICS.width * 0.04,
    color: COLORS.SECONDARY_COLOR,
  },
  deleteBtn: {
    backgroundColor: COLORS.DEFAULT_RED,
    padding: METRICS.width * 0.01,
    borderRadius: METRICS.width * 0.01,
  },

  footerContainer: {
    backgroundColor: '#fff',
    marginHorizontal: METRICS.width * 0.03,
    marginBottom: METRICS.width * 0.03,
    padding: METRICS.width * 0.04,

    borderRadius: METRICS.width * 0.01,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  totalPriceContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: METRICS.width * 0.048,
  },
  totalPricelabel: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.035 : METRICS.width * 0.04,
    color: COLORS.DARK_GREY,
  },
  totalPriceTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize:
      METRICS.width >= 768 ? METRICS.width * 0.045 : METRICS.width * 0.05,
    color: COLORS.PRIMARY_COLOR,
  },

  checkoutBtn: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    padding: METRICS.width * 0.025,
    borderRadius: METRICS.width * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.04,
    color: '#fff',
  },
});
