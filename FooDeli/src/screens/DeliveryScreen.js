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
import MapView, {Marker} from 'react-native-maps';

import * as Progress from 'react-native-progress';

import {COLORS, FONTS, METRICS, ROUTES} from '../themes';
import {useSelector} from 'react-redux';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const {restaurantData} = useSelector(state => state.restaurants);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{zIndex: 50}}>
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

      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1, zIndex: 0, marginTop: -METRICS.width * 0.05}}
        mapType={'mutedStandard'}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={restaurantData.title}
          description={restaurantData.short_description}
          identifier="origin"
          pinColor={COLORS.SEMANTIC_YELLOW}
        />
      </MapView>

      <SafeAreaView style={styles.footer}>
        <Image
          source={require('../assets/images/logo/deli_logo.png')}
          style={styles.logoImage}
        />
        <View style={{flex: 1}}>
          <Text style={styles.deliBoyTxt}>Deli Boy</Text>
          <Text style={styles.yourRiderTxt}>Your Rider</Text>
        </View>
        <Text style={styles.callTxt}>Call</Text>
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
    zIndex: 50,

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
  footer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    height: METRICS.width * 0.3,
    paddingHorizontal: METRICS.width * 0.03,
  },
  logoImage: {
    width: METRICS.width * 0.1,
    height: METRICS.width * 0.1,
    borderRadius: METRICS.width * 0.1,
    borderWidth: METRICS.width * 0.003,
    borderColor: COLORS.NATURAL_GREY,
    marginHorizontal: METRICS.width * 0.04,
  },
  deliBoyTxt: {
    color: COLORS.NATURAL_DEFAULT,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: METRICS.width * 0.04,
  },
  yourRiderTxt: {
    color: COLORS.NATURAL_DARK_GREY,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.03,
  },
  callTxt: {
    color: COLORS.PRIMARY,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.04,
    marginRight: METRICS.width * 0.03,
  },
});
