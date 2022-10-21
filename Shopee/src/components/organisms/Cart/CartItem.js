import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import Metrics from '../../../theme/Metrics';

const CartItem = props => {
  const data = props.item;
  return (
    <View style={styles.itemContainer}>
      {/* <Text>{JSON.stringify(data, null, 2)}</Text> */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: data.image
              ? data.image
              : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
          }}
        />
      </View>
      <View style={styles.itemNamePriceContainer}>
        <Text style={styles.itemName}>{data.name}</Text>
        <Text style={styles.itemPrice}>${data.price}</Text>
      </View>
      <TouchableOpacity onPress={() => props.deleteHandler(data)}>
        <IonIcons name="trash-outline" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Metrics._scale(15),
    marginVertical: Metrics._scale(10),
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
  itemNamePriceContainer: {
    flex: 1,
    marginLeft: Metrics._scale(20),
  },
  itemName: {
    fontSize: Metrics._scale(14),
    lineHeight: Metrics._scale(14 * 1.4),
    fontWeight: 'bold',
    marginBottom: Metrics._scale(5),
    textAlign: 'left',
  },
  itemPrice: {
    fontSize: Metrics._scale(12),
    lineHeight: Metrics._scale(12 * 1.4),
    fontWeight: '500',
  },
});
