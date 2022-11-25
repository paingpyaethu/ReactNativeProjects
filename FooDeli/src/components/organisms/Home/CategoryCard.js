import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {FONTS, METRICS} from '../../../themes';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    marginRight: METRICS.width * 0.03,
    position: 'relative',
  },
  image: {
    width: METRICS.width * 0.17,
    height: METRICS.width * 0.17,
    borderRadius: METRICS.width * 0.02,
    backgroundColor: 'red',
  },
  title: {
    position: 'absolute',
    color: '#fff',

    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.03,
    alignItems: 'center',
    bottom: METRICS.width * 0.01,
    left: METRICS.width * 0.01,
  },
});
