import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, METRICS} from '../../../themes';

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.image}
      />
      <View style={styles.title}>
        <Text style={styles.titleTxt}>{title}</Text>
      </View>
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
  },

  title: {
    position: 'absolute',
    bottom: METRICS.width * 0.008,
    left: METRICS.width * 0.008,
    backgroundColor: COLORS.SEMANTIC_LIGHT,
    borderRadius: METRICS.width * 0.02,
    paddingHorizontal: METRICS.width * 0.02,
  },

  titleTxt: {
    color: '#fff',
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.03,
    lineHeight: METRICS.width * 0.06,
  },
});
