/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';
import {urlFor} from '../../sanity';
import {removeFromCart, selectCartTotal} from '../store/slices/carts/cartSlice';
import {COLORS, FONTS, METRICS, ROUTES} from '../themes';

const CartScreen = () => {
  const navigation = useNavigation();
  const {restaurantData} = useSelector(state => state.restaurants);
  const items = useSelector(state => state.carts.cartData);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInCart(groupedItems);
  }, [items]);

  // console.log(groupedItemsInCart);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, backgroundColor: COLORS.NATURAL_GREY}}>
        <View style={styles.cartTitleContainer}>
          <View style={styles.cartTitle}>
            <Text style={styles.cartTxt}>Cart</Text>
            <Text style={styles.titleTxt}>{restaurantData.title}</Text>
          </View>
          <TouchableOpacity style={styles.closeBtn} onPress={navigation.goBack}>
            <IonIcons
              name="close-circle"
              size={METRICS.width * 0.08}
              color={COLORS.PRIMARY}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.deliTime}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/images/logo/deli_logo.png')}
              style={styles.image}
            />
            <Text style={styles.deliTxt}>Deliver in 20-30 min</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.changeTxt}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupedItemsInCart).map(([key, item]) => (
            <View key={key} style={styles.groupedItemsContainer}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.lengthTxt}>{item.length} x</Text>
                <Image
                  source={{uri: urlFor(item[0]?.image).url()}}
                  style={styles.image}
                />
                <Text style={styles.nameTxt}>{item[0]?.name}</Text>
              </View>
              <Text style={styles.priceTxt}>${item[0]?.price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart({id: key}))}>
                <IonIcons
                  name="trash-outline"
                  size={METRICS.width * 0.07}
                  color={COLORS.SEMANTIC_RED}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.placeOrderContainer}>
          <View style={styles.row}>
            <Text style={styles.subTotalTxt}>Subtotal</Text>
            <Text style={styles.subTotalTxt}>${cartTotal.toFixed(2)}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.subTotalTxt}>Delivery Fee</Text>
            <Text style={styles.subTotalTxt}>${'5.99'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.orderTotalTxt}>Order Total</Text>
            <Text style={styles.orderTotalTxt}>
              ${(cartTotal + 5.99).toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.placeOrder}
            onPress={() => navigation.navigate(ROUTES.PREPARING_ORDER)}>
            <Text style={styles.placeOrderTxt}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartTitleContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.NATURAL_DARK_GREY,
    padding: METRICS.width * 0.04,
  },
  cartTitle: {
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: METRICS.width * 0.06,
    right: METRICS.width * 0.03,
  },
  cartTxt: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: METRICS.width * 0.05,
    color: COLORS.NATURAL_DEFAULT,
  },
  titleTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.03,
    color: COLORS.NATURAL_DARK_GREY,
  },

  deliTime: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: METRICS.width * 0.03,
    paddingVertical: METRICS.width * 0.04,
    marginVertical: METRICS.width * 0.03,

    backgroundColor: '#fff',
  },
  image: {
    width: METRICS.width * 0.1,
    height: METRICS.width * 0.1,
    borderRadius: METRICS.width * 0.2,
    borderColor: COLORS.NATURAL_GREY,
    borderWidth: METRICS.width * 0.003,
  },
  deliTxt: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: METRICS.width * 0.035,
    color: COLORS.NATURAL_DEFAULT,
    marginHorizontal: METRICS.width * 0.03,
  },
  changeTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.035,
    color: COLORS.PRIMARY,
  },
  groupedItemsContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',

    padding: METRICS.width * 0.03,
    borderBottomWidth: METRICS.width * 0.002,
    borderBottomColor: COLORS.NATURAL_GREY,
  },
  lengthTxt: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: METRICS.width * 0.033,
    color: COLORS.NATURAL_DEFAULT,
    marginRight: METRICS.width * 0.03,
  },
  nameTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.04,
    color: COLORS.NATURAL_DEFAULT,
    marginLeft: METRICS.width * 0.03,
  },
  priceTxt: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: METRICS.width * 0.035,
    color: COLORS.PRIMARY,
    marginHorizontal: METRICS.width * 0.03,
  },
  placeOrderContainer: {
    backgroundColor: '#fff',
    padding: METRICS.width * 0.03,
    marginTop: METRICS.width * 0.03,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: METRICS.width * 0.02,
  },
  subTotalTxt: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.036,
    color: COLORS.NATURAL_DARK_GREY,
  },
  orderTotalTxt: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: METRICS.width * 0.036,
    color: COLORS.NATURAL_DEFAULT,
  },
  placeOrder: {
    backgroundColor: COLORS.PRIMARY,
    padding: METRICS.width * 0.03,
    borderRadius: METRICS.width * 0.02,
    marginVertical: METRICS.width * 0.02,
  },
  placeOrderTxt: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: METRICS.width * 0.036,
    color: COLORS.NATURAL_LIGHT,

    textAlign: 'center',
  },
});
