import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import Metrics from '../theme/Metrics';
import {useOrientation} from '../hooks/useOrientation';

const OrderScreen = props => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);

  let total = 0;
  props.cartItems.forEach(cart => {
    return (total += cart.product.price);
  });
  return (
    <>
      {props.cartItems.length > 0 ? (
        <View style={styles.container}>
          <Text style={styles.cartHeader}>My Shopping Cart</Text>
          <ScrollView>
            {props.cartItems.map(data => {
              return (
                <View key={data.product._id} style={styles.itemContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      resizeMode="contain"
                      source={{
                        uri: data.product.image
                          ? data.product.image
                          : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
                      }}
                    />
                  </View>
                  <View style={styles.itemNamePriceContainer}>
                    <Text style={styles.itemName}>{data.product.name}</Text>
                    <Text style={styles.itemPrice}>${data.product.price}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>

          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalPriceText}>${total}</Text>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.clearBtn}>
              <Text style={styles.clearText}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.emptyCart}>
          <Image
            source={require('../assets/img/empty-cart.png')}
            resizeMode="contain"
          />
        </View>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};
const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    cartHeader: {
      alignSelf: 'center',
      fontSize: Metrics._scale(20),
      lineHeight: Metrics._scale(20 * 1.4),
      fontWeight: 'bold',
      marginBottom: Metrics._scale(10),
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: Metrics._scale(15),
      marginVertical: Metrics._scale(10),
    },
    itemNamePriceContainer: {
      marginLeft: Metrics._scale(20),
    },
    itemName: {
      fontSize: Metrics._scale(14),
      lineHeight: Metrics._scale(14 * 1.4),
      fontWeight: 'bold',
      marginBottom: Metrics._scale(5),
    },
    itemPrice: {
      fontSize: Metrics._scale(12),
      lineHeight: Metrics._scale(12 * 1.4),
      fontWeight: '500',
    },
    imageContainer: {
      backgroundColor: '#dee1ec',
      padding: Metrics._scale(8),
      borderRadius: Metrics._scale(8),
    },
    image: {
      width: Metrics._scale(80),
      height: Metrics._scale(80),
    },

    totalPriceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      margin: Metrics._scale(15),
    },
    totalText: {
      fontSize: Metrics._scale(14),
      lineHeight: Metrics._scale(14 * 1.4),
      fontWeight: '500',
      color: '#3e3636',
    },
    totalPriceText: {
      fontSize: Metrics._scale(14),
      lineHeight: Metrics._scale(14 * 1.4),
      fontWeight: '500',
      color: '#cb3b3b',
    },

    bottomContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',

      marginBottom: Metrics._scale(15),
    },
    clearBtn: {
      backgroundColor: '#ff5959',
      height: Metrics._scale(30),
      width: Metrics._scale(100),
      borderRadius: Metrics._scale(8),
    },
    clearText: {
      fontSize: Metrics._scale(14),
      color: '#fff',
      textAlign: 'center',
      lineHeight: Metrics._scale(30),
    },
    checkoutBtn: {
      backgroundColor: '#17b978',
      height: Metrics._scale(30),
      width: Metrics._scale(100),
      borderRadius: Metrics._scale(8),

      marginLeft: Metrics._scale(10),
    },
    checkoutText: {
      fontSize: Metrics._scale(14),
      color: '#fff',
      textAlign: 'center',
      lineHeight: Metrics._scale(30),
    },

    emptyCart: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default connect(mapStateToProps, null)(OrderScreen);
