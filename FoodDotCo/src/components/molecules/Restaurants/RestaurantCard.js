import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import IconIons from 'react-native-vector-icons/Ionicons';
import {useOrientation} from '../../../hooks/useOrientation';
import Colors from '../../../theme/Colors';
import Metrics from '../../../theme/Metrics';

const RestaurantCard = ({name}) => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);
  return (
    <TouchableOpacity style={styles.container}>
      <Image />
      <Text></Text>
      <Text></Text>
      <View>
        <View>
          <IconIons />
          <Text></Text>
          <Text></Text>
        </View>
        <View>
          <View>
            <IconIons />
            <Text></Text>
          </View>
          <View>
            <IconIons />
            <Text></Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: Colors.DEFAULT_BLACK,
      borderRadius: Metrics._scale(10),
    },
    posterStyle: {
      width: 1920 * 0.15,
      height: 1000 * 0.15,
      borderRadius: Metrics._scale(10),
      margin: Metrics._scale(5),
    },
  });
export default RestaurantCard;
