import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import Images from '../../theme/Images';
import Metrics from '../../theme/Metrics';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';

const CategoryMenuItem = props => {
  const {name, logo, activeCategory, setActiveCategory, id} = props;
  return (
    <TouchableOpacity
      key={id}
      onPress={() => setActiveCategory(name)}
      style={styles.category()}>
      <Image
        source={Images[logo]}
        style={styles.categoryIcon(activeCategory === name)}
      />
      <Text style={styles.categoryText(activeCategory === name)}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: () => ({
    alignItems: 'center',
  }),
  categoryIcon: isActive => ({
    height: Metrics._scale(30),
    width: Metrics._scale(30),
    opacity: isActive ? 1 : 0.5,
  }),
  categoryText: isActive => ({
    fontSize: Metrics._scale(10),
    lineHeight: Metrics._scale(10 * 1.4),
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    marginTop: Metrics._scale(5),
    opacity: isActive ? 1 : 0.5,
  }),
});
export default CategoryMenuItem;
