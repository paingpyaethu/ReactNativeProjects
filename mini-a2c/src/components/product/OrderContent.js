import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

//Style
import styles from './style';

const OrderContent = props => {
  return (
    <>
      {/* <Text>{JSON.stringify(props.data.length)}</Text> */}
      {props.data.length > 0 ? (
        props.data.map(item => (
          <View style={styles.container} key={item.id}>
            {/* order information */}
            <View style={styles.leftContainer}>
              <Image source={item.imageUrl} style={styles.image} />
              <View style={styles.productInfo}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>
                  Price : {item.price} {item.currency}
                </Text>
              </View>
            </View>

            {/* confirm order */}
            <View style={styles.rightContainer}>
              <TouchableOpacity
                style={[
                  styles.confirmBtn,
                  {marginRight: wp(2), backgroundColor: '#de0000'},
                ]}
                onPress={() => props.deleteHandler(item.id)}>
                <Text style={styles.confirmText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn}>
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.emptyContainer}>
          <Text>Empty Cart</Text>
        </View>
      )}
    </>
  );
};

export default OrderContent;
