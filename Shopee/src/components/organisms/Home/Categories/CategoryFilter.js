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
import {useOrientation} from '../../../../hooks/useOrientation';

const CategoryFilter = props => {
  const {catData} = props;

  const orientation = useOrientation();
  const styles = responsiveStyle(orientation);
  return (
    <>
      <ScrollView bounces={true} horizontal={true} style={styles.container}>
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
            <Text style={{color: '#F8FCFF'}}>{'All'}</Text>
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
                <Text style={{color: '#F8FCFF'}}>{item.name}</Text>
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
    </>
  );
};

const responsiveStyle = orientation =>
  StyleSheet.create({
    container: {
      backgroundColor: '#f2f2f2',
    },
    categoryContainer: {
      marginHorizontal: 10,
      marginVertical: 20,
    },
    categories: {
      padding: 8,
      borderRadius: 8,
    },
  });

export default CategoryFilter;
