/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useOrientation} from '../../../../hooks/useOrientation';

import Metrics from '../../../../theme/Metrics';

var {width} = Dimensions.get('window');
const ProductCard = props => {
  const {name, price, image, countInStock} = props;
  // console.log('ProductCard Rendered');

  const orientation = useOrientation();
  const styles = customStyle(orientation);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
        }}
      />

      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text style={styles.price}>${price}</Text>

      {countInStock > 0 ? (
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            backgroundColor: '#f85959',
            paddingVertical: Metrics._scale(5),
            paddingHorizontal: Metrics._scale(10),
            borderRadius: Metrics._scale(5),
          }}>
          <Text style={{fontSize: Metrics._scale(13), color: '#feff89'}}>
            Currently Unavailable
          </Text>
        </View>
      )}
    </View>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      width: orientation.width / 2 - Metrics._scale(14),
      height: Metrics._scale(200),
      padding: Metrics._scale(10),
      borderRadius: Metrics._scale(10),
      marginTop: Metrics._scale(53), //55
      marginBottom: Metrics._scale(10),
      marginLeft: (orientation.width / 100) * 2.6,
      alignItems: 'center',
      backgroundColor: '#fff',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    image: {
      width: orientation.width / 2 - Metrics._scale(34),
      height: orientation.width / 2 - Metrics._scale(64),
      backgroundColor: 'transparent',
      position: 'absolute',
      top: -Metrics._scale(44),
    },
    title: {
      fontSize: Metrics._scale(14),
      fontWeight: 'bold',
      textAlign: 'center',

      marginTop: Metrics._scale(70),
    },
    price: {
      fontSize: Metrics._scale(18),
      color: 'orange',
      marginVertical: Metrics._scale(10),
    },
    addBtn: {
      backgroundColor: '#17b978',
      paddingVertical: Metrics._scale(5),
      paddingHorizontal: Metrics._scale(10),
      borderRadius: Metrics._scale(5),
    },
    addBtnText: {
      fontSize: Metrics._scale(14),
      color: '#fdfdfd',
    },
  });
export default ProductCard;
