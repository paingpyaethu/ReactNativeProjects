/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useOrientation} from '../../../../hooks/useOrientation';
import Metrics from '../../../../theme/Metrics';

const CategoryFilter = props => {
  const {catData} = props;

  const orientation = useOrientation();
  const styles = responsiveStyle(orientation);

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
            <Text style={{color: '#F8FCFF', fontSize: Metrics._scale(13)}}>
              {'All'}
            </Text>
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
                <Text style={{color: '#F8FCFF', fontSize: Metrics._scale(13)}}>
                  {item.name}
                </Text>
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

const responsiveStyle = orientation =>
  StyleSheet.create({
    container: {
      backgroundColor: '#f2f2f2',
      // backgroundColor: 'red',
    },
    categoryContainer: {
      marginHorizontal: Metrics._scale(9),
      marginVertical: Metrics._scale(19),
    },
    categories: {
      padding: Metrics._scale(8),
      borderRadius: Metrics._scale(8),
    },
  });

export default CategoryFilter;
