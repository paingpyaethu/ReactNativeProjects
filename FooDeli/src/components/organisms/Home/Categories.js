import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import sanityClient, {urlFor} from '../../../../sanity';
import {COLORS, FONTS, METRICS} from '../../../themes';
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
      <TouchableOpacity style={styles.container}>
        <Image
          source={require('../../../assets/images/logo/foodeli-logo.png')}
          style={styles.image}
        />
        <View style={styles.title}>
          <Text style={styles.titleTxt}>{'All'}</Text>
        </View>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    marginRight: METRICS.width * 0.03,
    position: 'relative',
  },
  image: {
    width: METRICS.width * 0.17,
    height: METRICS.width * 0.17,
    borderRadius: METRICS.width * 0.02,
  },

  title: {
    position: 'absolute',
    bottom: METRICS.width * 0.008,
    left: METRICS.width * 0.008,
    backgroundColor: COLORS.SEMANTIC_LIGHT,
    borderRadius: METRICS.width * 0.02,
    paddingHorizontal: METRICS.width * 0.02,
  },

  titleTxt: {
    color: '#fff',
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: METRICS.width * 0.03,
    lineHeight: METRICS.width * 0.06,
  },
});
