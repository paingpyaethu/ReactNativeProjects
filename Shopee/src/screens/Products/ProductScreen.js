/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CustomSearchBar from '../../components/molecules/CustomSearchBar';
import Banner from '../../components/organisms/Home/Banner';
import ProductList from '../../components/organisms/Home/Products/ProductList';
import {useOrientation} from '../../hooks/useOrientation';

const data = require('../../assets/data/products.json');
import SearchedProducts from './SearchedProducts';

const ProductScreen = () => {
  const orientation = useOrientation();
  const styles = responsiveStyle(orientation);

  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [focus, setFocus] = useState();
  useEffect(() => {
    setProducts(data);
    setProductFiltered(data);
    setFocus(false);

    return () => {
      setProducts([]);
      setProductFiltered([]);
      setFocus();
    };
  }, []);

  const searchProduct = text => {
    setProductFiltered(
      products.filter(i => i.name.toLowerCase().includes(text.toLowerCase())),
    );
  };
  const openList = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  return (
    <View style={styles.container}>
      <CustomSearchBar
        onFocus={openList}
        onChangeText={text => searchProduct(text)}
        focus={focus}
        onPress={onBlur}
      />
      {focus === true ? (
        <SearchedProducts productFiltered={productFiltered} />
      ) : (
        <View>
          <View>
            <Banner />
          </View>
          <FlatList
            numColumns={2}
            data={products}
            renderItem={({item}) => <ProductList key={item.id} item={item} />}
            keyExtractor={item => item.name}
          />
        </View>
      )}
    </View>
  );
};

const responsiveStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop:
        orientation.isPortrait === true
          ? -orientation.width / 20
          : -orientation.width / 26,
    },
  });
export default ProductScreen;
