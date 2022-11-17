/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, METRICS, ROUTES} from '../../../themes';

const SearchedProduct = ({data, navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {data && data.length > 0 ? (
        data.map((i, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate(ROUTES.PRODUCT_DETAIL, {item: i})
            }>
            <View style={styles.listContainer}>
              <Image
                style={styles.images}
                resizeMode="contain"
                source={{
                  uri: i.image
                    ? i.image
                    : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
                }}
              />

              <View style={styles.listText}>
                <Text style={styles.name}>{i.name}</Text>

                <Text style={styles.desc}>
                  {i.description.length > 100
                    ? i.description.substring(0, 100) + '...'
                    : i.description}
                </Text>

                <View style={styles.numOfReviewsContainer}>
                  <IonIcons
                    name="star"
                    color={COLORS.DEFAULT_YELLOW}
                    size={METRICS.height / 50}
                  />
                  <Text style={styles.numOfReviews}>({i.numOfReviews})</Text>
                  {i.Stock === 0 ? (
                    <Text style={styles.outOfStock}>Out Of Stock</Text>
                  ) : null}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View>
          <Text style={{alignSelf: 'center'}}>
            No products match the selected criteria
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GREY,
    borderTopLeftRadius:
      Platform.OS === 'ios' ? METRICS.height / 30 : METRICS.height / 7,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: METRICS._scale(10),
    overflow: 'hidden',
  },
  listText: {
    marginHorizontal: METRICS._scale(10),
    paddingHorizontal: METRICS._scale(3),
  },
  images: {
    width: METRICS.height / 10,
    height: METRICS.height / 15,
  },
  name: {
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.height / 46,
    color: COLORS.FOCUS_COLOR,
    marginBottom: METRICS._scale(3),
  },
  desc: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 60,
    color: '#343434',
    paddingRight: METRICS.width / 8.22,
    flexWrap: 'wrap',
  },
  numOfReviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: METRICS._scale(8),
  },
  numOfReviews: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 70,
    paddingLeft: METRICS._scale(3),
  },
  outOfStock: {
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.height / 70,
    color: COLORS.DEFAULT_RED,
    paddingLeft: METRICS._scale(3),
  },
});
export default SearchedProduct;
