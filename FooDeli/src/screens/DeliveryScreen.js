/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import * as Progress from 'react-native-progress';

import {COLORS, FONTS, METRICS, ROUTES} from '../themes';
import {useSelector} from 'react-redux';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const {restaurantData} = useSelector(state => state.restaurants);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.orderHelpContainer}>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
            <IonIcons
              name="close"
              size={METRICS.width * 0.07}
              color={COLORS.NATURAL_LIGHT}
            />
          </TouchableOpacity>
          <Text style={styles.orderHelpTxt}>Order Help</Text>
        </View>
        <View style={styles.estimatedContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.estimatedTxt}>Estimated Arrival</Text>
              <Text style={styles.minuteTxt}>20-30 Minutes</Text>
            </View>
            <Image
              source={require('../assets/images/delivery-boy.gif')}
              style={styles.image}
            />
          </View>
          <Progress.Bar
            size={METRICS.width * 0.08}
            color={COLORS.ACCENT}
            indeterminate={true}
          />
          <Text style={styles.restaurantDataTxt}>
            Your order at {restaurantData.title} is being prepared!
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SEMANTIC_YELLOW,
  },
  orderHelpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: METRICS.width * 0.03,
  },
  orderHelpTxt: {
    color: COLORS.NATURAL_LIGHT,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.04,
  },
  estimatedContainer: {
    backgroundColor: COLORS.NATURAL_LIGHT,
    marginHorizontal: METRICS.width * 0.03,
    marginVertical: METRICS.width * 0.02,
    padding: METRICS.width * 0.044,
    borderRadius: METRICS.width * 0.02,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  estimatedTxt: {
    color: COLORS.NATURAL_DARK_GREY,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: METRICS.width * 0.035,
  },
  minuteTxt: {
    color: COLORS.NATURAL_DEFAULT,
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: METRICS.width * 0.06,
  },
  image: {
    width: METRICS.width * 0.2,
    height: METRICS.width * 0.2,
  },
  restaurantDataTxt: {
    marginTop: METRICS.width * 0.03,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.03,
  },
});
