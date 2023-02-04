import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, METRICS} from '../../themes';
import NavOptions from '../molecules/Home/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_API_KEY} from '@env';

const Home = () => {
  return (
    <View>
      <Text style={styles.carrieTxt}>Carrie</Text>
      <View style={styles.search}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlaceSearch"
          debounce={400}
          query={{
            key: 'AIzaSyAyLOv2N3qllQivEX59UZ8FFtpTdYqmDrE',
            language: 'en',
          }}
        />
      </View>
      <NavOptions />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  carrieTxt: {
    color: COLORS.DEFAULT_WHITE,
    fontSize: METRICS.width * 0.06,
    fontWeight: '600',
    marginHorizontal: METRICS.width * 0.04,
  },
  search: {
    marginTop: METRICS.width * 0.08,
    marginBottom: METRICS.width * 0.15,
    paddingHorizontal: METRICS.width * 0.04,
  },
});
