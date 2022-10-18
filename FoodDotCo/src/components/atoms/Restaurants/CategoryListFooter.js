import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../theme/Colors';
import Metrics from '../../../theme/Metrics';

const CategoryListFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    width: Metrics._scale(60),
  },
  subContainer: {
    backgroundColor: Colors.LIGHT_YELLOW,
    width: Metrics._scale(35),
    borderTopRightRadius: Metrics._scale(60),
    borderBottomRightRadius: Metrics._scale(60),
  },
});

export default CategoryListFooter;
