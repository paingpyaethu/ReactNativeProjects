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

import {METRICS} from '../../theme';

const SearchedProducts = props => {
  console.log('SearchProducts Rendered!');
  const {productFiltered} = props;

  return (
    <ScrollView style={styles.container}>
      {productFiltered && productFiltered.length > 0 ? (
        productFiltered.map((item, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.listContainer}>
              {/* <Text>{dimension.height}</Text> */}

              <Image
                style={styles.images}
                resizeMode="contain"
                source={{
                  uri: item.image
                    ? item.image
                    : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
                }}
              />

              <View style={styles.listText}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.desc}>
                    {item.description.length > 100
                      ? item.description.substring(0, 100) + '...'
                      : item.description}
                  </Text>
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
    height: METRICS.height,
    backgroundColor: 'gainsboro',
    borderTopLeftRadius:
      Platform.OS === 'ios' ? METRICS.height / 30 : METRICS.height / 7,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  listText: {
    marginHorizontal: 15,
  },
  images: {
    width: METRICS.width / 5.57,
    height: METRICS.height / 12.06,
  },
  name: {
    fontSize: METRICS.width / 22.83,
    fontWeight: 'bold',
    color: '#43425D',
    marginBottom: METRICS.height / 168.8,
  },
  desc: {
    fontSize: METRICS.width / 29.3571,
    color: '#343434',
    paddingRight: METRICS.width / 8.22,
  },
});
export default SearchedProducts;
