import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

// Custom Themes
import {METRICS} from '../../../theme';

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
    marginHorizontal: METRICS._scale(15),
    marginVertical: METRICS._scale(10),
  },
  imageContainer: {
    backgroundColor: '#dee1ec',
    padding: METRICS._scale(8),
    borderRadius: METRICS._scale(8),
  },
  image: {
    width: METRICS._scale(80),
    height: METRICS._scale(80),
  },
  itemNamePriceContainer: {
    flex: 1,
    marginLeft: METRICS._scale(20),
  },
  itemName: {
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
    fontWeight: 'bold',
    marginBottom: METRICS._scale(5),
    textAlign: 'left',
  },
  itemPrice: {
    fontSize: METRICS._scale(12),
    lineHeight: METRICS._scale(12 * 1.4),
    fontWeight: '500',
  },
});
