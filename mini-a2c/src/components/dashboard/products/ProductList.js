/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Style
import styles from './style';

// Icons
import Cart from '@assets/icons/cart';

const productList = props => {
  const [count, setCount] = useState(0);

  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.productContainer}
        activeOpacity={0.8}
        onPress={() => props.productDetail(item)}>
        {/* product image */}
        <View style={styles.imageContainer}>
          <Image source={item.imageUrl} style={styles.image} />
        </View>

        {/* product description */}
        <View style={styles.footerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>
              {props.priceTitle} {item.price} {item.currency}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.addtoCartBtn}
            onPress={props.addToCartAction}>
            <Cart width={wp(4)} height={hp(2)} />
            <Text style={styles.addtoCart}>{props.addToCartTitle}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.productListContainer}>
      <FlatList
        data={props.data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default productList;
