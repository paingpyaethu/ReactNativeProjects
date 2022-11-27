import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import sanityClient, {urlFor} from '../../../../sanity';
import {METRICS} from '../../../themes';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
    `,
      )
      .then(data => {
        setCategories(data);
      });
  }, []);
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
      {categories?.map(category => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
