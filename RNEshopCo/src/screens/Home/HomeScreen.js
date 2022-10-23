import React from 'react';
import {View, Text} from 'react-native';
import Banner from '../../components/molecules/Home/Banner';
import ProductList from '../../components/organisms/Home/ProductList';

const HomeScreen = () => {
  return (
    <View>
      <Banner />
      <ProductList />
    </View>
  );
};

export default HomeScreen;
