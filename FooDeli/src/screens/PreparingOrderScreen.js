/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

import {COLORS, FONTS, METRICS, ROUTES} from '../themes';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTES.DELIVERY);
    }, 4000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        source={require('../assets/images/orderLoading.gif')}
        animation="slideInUp"
        iterationCount={1}
      />

      <Animatable.Text
        animation={'slideInUp'}
        iterationCount={1}
        style={styles.txt}>
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.CircleSnail
        size={METRICS.width * 0.15}
        indeterminate={true}
        color={'#fff'}
        style={{marginTop: METRICS.width * 0.04}}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.SEMANTIC_YELLOW,
  },
  txt: {
    color: '#fff',
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.04,
    marginVertical: METRICS.width * 0.04,
  },
});
