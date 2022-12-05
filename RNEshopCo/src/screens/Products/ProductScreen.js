import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import HeaderMenu from '../../components/molecules/Home/HeaderMenu';
import FilterProducts from '../../components/organisms/Products/FilterProducts';
import SearchedProduct from '../../components/organisms/Products/SearchedProduct';

const ProductScreen = ({navigation}) => {
  const {products} = useSelector(state => state.products);

  const [data, setData] = useState();
  const [search, setSearch] = useState('');

  const searchHandler = text => {
    if (text) {
      setData(
        products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
      );
      setSearch(text);
    } else {
      setData(products);
      setSearch(text);
    }
  };
  return (
    <View style={styles.container}>
      <HeaderMenu
        navigation={navigation}
        value={search}
        onChangeText={text => searchHandler(text)}
      />
      {search.length !== 0 ? (
        <SearchedProduct data={data} navigation={navigation} />
      ) : (
        <FilterProducts navigation={navigation} />
      )}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
