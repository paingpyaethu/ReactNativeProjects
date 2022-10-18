import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import Metrics from '../../../theme/Metrics';

const CategoryListItem = ({name, isActive, selectCategory}) => {
  return (
    <View style={styles.container}>
      <Text
        style={
          isActive ? styles.activeCategoryText : styles.inActiveCategoryText
        }
        onPress={() => selectCategory(name)}>
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_YELLOW,
    height: Metrics._scale(40),
    justifyContent: 'center',
  },
  activeCategoryText: {
    fontSize: Metrics._scale(13),
    lineHeight: Metrics._scale(13 * 1.4),
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
    marginLeft: Metrics._scale(10),
  },
  inActiveCategoryText: {
    fontSize: Metrics._scale(13),
    lineHeight: Metrics._scale(13 * 1.4),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.INACTIVE_GREY,
    marginLeft: Metrics._scale(10),
  },
});

export default CategoryListItem;
