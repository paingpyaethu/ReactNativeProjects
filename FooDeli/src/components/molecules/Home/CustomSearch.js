import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';
import {COLORS, METRICS} from '../../../themes';

const CustomSearch = props => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <IonIcons
          name="ios-search"
          size={METRICS.width * 0.04}
          color={COLORS.NATURAL_DARK_GREY}
        />
        <TextInput
          placeholder="Restaurants and cuisines"
          placeholderTextColor={COLORS.NATURAL_DARK_GREY}
          onFocus={props.onFocus}
          onChangeText={props.onChangeText}
          keyboardType="default"
          style={styles.input}
        />
      </View>

      <IonIcons
        name="options-outline"
        size={METRICS.width * 0.06}
        color={COLORS.PRIMARY}
      />
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: METRICS.width * 0.03,
    marginBottom: METRICS.width * 0.03,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: METRICS.width * 0.1,
    backgroundColor: COLORS.NATURAL_LIGHT,
    borderRadius: METRICS.width * 0.05,
    paddingHorizontal: METRICS.width * 0.02,
    marginRight: METRICS.width * 0.03,
  },
  input: {
    paddingHorizontal: METRICS.width * 0.02,
    color: COLORS.NATURAL_DEFAULT,
  },
});
