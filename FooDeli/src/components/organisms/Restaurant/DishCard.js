/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {urlFor} from '../../../../sanity';
import {addToCart, removeFromCart} from '../../../store/slices/carts/cartSlice';
import {COLORS, FONTS, METRICS} from '../../../themes';

const DishCard = ({id, name, description, price, image}) => {
  const [isPressed, setIsPressed] = useState(false);

  const items = useSelector(state => state.carts.cartData);
  const itemWithId = items.filter(item => item.id === id);

  const dispatch = useDispatch();

  const _addItemToCart = () => {
    dispatch(addToCart({id, name, description, price, image}));
  };

  const _removeItemfromCart = () => {
    if (!items.length > 0) {
      return;
    }
    dispatch(removeFromCart({id}));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => setIsPressed(!isPressed)}>
        <View style={{flex: 1, paddingRight: METRICS.width * 0.02}}>
          <Text style={styles.nameTxt}>{name}</Text>
          <Text style={styles.descriptionTxt}>{description}</Text>
          <Text style={styles.priceTxt}>${price}</Text>
        </View>
        <Image source={{uri: urlFor(image).url()}} style={styles.image} />
      </TouchableOpacity>

      {isPressed && (
        <View style={styles.quantityContainer}>
          <View style={styles.quantityBox}>
            <TouchableOpacity
              disabled={!itemWithId.length}
              onPress={_removeItemfromCart}>
              <IonIcons
                name="remove-circle"
                size={METRICS.width * 0.08}
                color={
                  itemWithId.length > 0
                    ? COLORS.PRIMARY
                    : COLORS.NATURAL_DARK_GREY
                }
              />
            </TouchableOpacity>

            <Text style={styles.quantityTxt}>{itemWithId.length}</Text>

            <TouchableOpacity onPress={_addItemToCart}>
              <IonIcons
                name="add-circle"
                size={METRICS.width * 0.08}
                color={COLORS.PRIMARY}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default DishCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: METRICS.width * 0.03,
    padding: METRICS.width * 0.03,
    marginHorizontal: METRICS.width * 0.02,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameTxt: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.04,
    lineHeight: METRICS.width * 0.08,
  },
  descriptionTxt: {
    color: COLORS.NATURAL_DARK_GREY,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.032,
    marginBottom: METRICS.width * 0.02,
  },
  priceTxt: {
    color: COLORS.SEMANTIC_RED,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.032,
  },

  image: {
    width: METRICS.width * 0.15,
    height: METRICS.width * 0.15,
    borderRadius: METRICS.width * 0.2,

    borderWidth: METRICS.width * 0.005,
    borderColor: COLORS.SEMANTIC_LIGHT,
  },
  quantityContainer: {
    paddingTop: METRICS.width * 0.03,
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityTxt: {
    color: COLORS.NATURAL_DEFAULT,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.04,

    paddingHorizontal: METRICS.width * 0.01,
  },
});
