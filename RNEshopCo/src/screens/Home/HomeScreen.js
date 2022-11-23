/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import HeaderMenu from '../../components/molecules/Home/HeaderMenu';
import Banner from '../../components/molecules/Home/Banner';
import ProductList from '../../components/organisms/Home/ProductList';
import {getAllProducts} from '../../stores/slices/products/productSlice';
import Loader from '../../components/molecules/Home/Loader';
import SearchedProduct from '../../components/organisms/Products/SearchedProduct';

const HomeScreen = ({navigation}) => {
  const {isLoading, products} = useSelector(state => state.products);
  const {wishlistData} = useSelector(state => state.wishlists);

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

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      dispatch(getAllProducts());
    }
    return () => {
      mounted = true;
    };
  }, [dispatch]);

  return (
    <>
      {isLoading === false ? (
        <View style={styles.container}>
          <HeaderMenu
            navigation={navigation}
            value={search}
            onChangeText={text => searchHandler(text)}
          />
          {search.length !== 0 ? (
            <SearchedProduct data={data} navigation={navigation} />
          ) : (
            <>
              <Banner />
              <ProductList
                data={products}
                navigation={navigation}
                wishlistData={wishlistData}
              />
            </>
          )}
        </View>
      ) : (
        <Loader />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
