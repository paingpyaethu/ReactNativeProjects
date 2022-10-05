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

var {width} = Dimensions.get('window');
const ProductCard = props => {
  const {name, price, image, countInStock} = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
        }}
      />

      <View style={styles.card} />
      {/* <Text>{-width / 26}</Text> */}
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text style={styles.price}>${price}</Text>

      {countInStock > 0 ? (
        <View>
          <Button title={'Add'} color={'green'} />
        </View>
      ) : (
        <Text style={{marginTop: 20}}>Currently Unavailable</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: width / 39,
    borderRadius: width / 39,
    marginTop: width / 7.09, //55
    marginBottom: width / 39,
    marginLeft: width / 39,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#fff',
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -width / 8.86,
  },
  card: {
    marginBottom: width / 13,
    height: width / 2 - 20 - 95,
    width: width / 2 - 20 - 10,
  },
  title: {
    fontSize: width / 27.84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: width / 19.5,
    color: 'orange',
    marginTop: width / 39,
  },
});
export default ProductCard;
