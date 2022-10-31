/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

// Custom Themes
import {FONTS, METRICS} from '../../../../theme';

const CategoryFilter = props => {
  const {catData} = props;
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => {
            props.categoryFilter('all'), props.setActive('all');
          }}>
          <View
            style={[
              styles.categories,
              props.active === 'all'
                ? {backgroundColor: '#1f4287'}
                : {backgroundColor: '#88bef5'},
            ]}>
            <Text style={styles.allCatText}>{'All'}</Text>
          </View>
        </TouchableOpacity>
        {catData &&
          catData.length > 0 &&
          catData.map(item => (
            <TouchableOpacity
              key={item._id}
              style={styles.categoryContainer}
              onPress={() => {
                props.categoryFilter(item._id),
                  props.setActive(props.catData.indexOf(item));
              }}>
              <View
                style={[
                  styles.categories,
                  props.active === props.catData.indexOf(item)
                    ? {backgroundColor: '#1f4287'}
                    : {backgroundColor: '#88bef5'},
                ]}>
                <Text style={styles.catetoryText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
      {!catData && (
        <View style={{backgroundColor: '#f2f2f2'}}>
          <View
            style={{
              margin: 15,
              backgroundColor: '#F35162',
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{color: '#F8FCFF', textAlign: 'center'}}>
              No Categories Found!
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f2f2f2',
    // backgroundColor: 'red',
  },
  categoryContainer: {
    marginHorizontal: METRICS._scale(9),
    marginVertical: METRICS._scale(19),
  },
  categories: {
    padding: METRICS._scale(8),
    borderRadius: METRICS._scale(8),
  },

  allCatText: {
    color: '#F8FCFF',
    fontSize: METRICS._scale(13),
    lineHeight: METRICS._scale(13 * 1.4),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  catetoryText: {
    color: '#F8FCFF',
    fontSize: METRICS._scale(13),
    lineHeight: METRICS._scale(13 * 1.4),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
});

export default CategoryFilter;
