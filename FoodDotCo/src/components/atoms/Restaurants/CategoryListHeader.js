import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';
import Metrics from '../../../theme/Metrics';

const CategoryListHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer} />
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    width: Metrics._scale(60),
    justifyContent: 'flex-end',
  },
  subContainer: {
    backgroundColor: Colors.LIGHT_YELLOW,
    width: Metrics._scale(35),
    borderTopLeftRadius: Metrics._scale(60),
    borderBottomLeftRadius: Metrics._scale(60),
  },
  circleContainer: {
    width: Metrics._scale(18),
    height: Metrics._scale(18),
    borderRadius: Metrics._scale(9),
    backgroundColor: Colors.DEFAULT_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Metrics._scale(28),
  },
  circle: {
    width: Metrics._scale(7),
    height: Metrics._scale(7),
    borderRadius: Metrics._scale(4.5),
    backgroundColor: Colors.LIGHT_YELLOW,
  },
});

export default CategoryListHeader;
