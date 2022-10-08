import {StyleSheet, View} from 'react-native';
import React from 'react';
import General from '../../stores/constants/General';
import PageStyle from '../atoms/PageStyle';

const Pagination = ({index}) => {
  return (
    <View style={styles.container}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={PageStyle(true)} key={i} />
        ) : (
          <View style={PageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Pagination;
