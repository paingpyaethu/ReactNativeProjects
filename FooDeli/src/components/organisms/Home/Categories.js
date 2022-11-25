import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {METRICS} from '../../../themes';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingLeft: METRICS.width * 0.03,
        paddingVertical: METRICS.width * 0.02,
        marginBottom: METRICS.width * 0.03,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://rb.gy/roni98" title="Testing-1" />
      <CategoryCard imgUrl="https://rb.gy/roni98" title="Testing-2" />
      <CategoryCard imgUrl="https://rb.gy/roni98" title="Testing-3" />
      <CategoryCard imgUrl="https://rb.gy/roni98" title="Testing-3" />
      <CategoryCard imgUrl="https://rb.gy/roni98" title="Testing-3" />
      <CategoryCard imgUrl="https://rb.gy/roni98" title="Testing-3" />
      <CategoryCard imgUrl="https://rb.gy/roni98" title="Testing-3" />
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
