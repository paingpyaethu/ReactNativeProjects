/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomSearchBar from '../../components/molecules/CustomSearchBar';
import Banner from '../../components/organisms/Home/Banner';
import CategoryFilter from '../../components/organisms/Home/Categories/CategoryFilter';
import ProductList from '../../components/organisms/Home/Products/ProductList';
import SearchedProducts from './SearchedProducts';

import {useOrientation} from '../../hooks/useOrientation';
import {FlashList} from '@shopify/flash-list';

const data = require('../../assets/data/products.json');
const categoriesData = require('../../assets/data/categories.json');

const HomeScreen = props => {
  const orientation = useOrientation();
  const styles = responsiveStyle(orientation);

  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [focus, setFocus] = useState();

  const [categories, setCategories] = useState([]);
  const [productsCat, setProductsCat] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductFiltered(data);
    setFocus(false);

    setCategories(categoriesData);
    setProductsCat(data);
    setActive('all');
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductFiltered([]);
      setFocus();

      setCategories([]);
      setProductsCat([]);
      setActive();
      setInitialState([]);
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

  // Categories
  const changeCategories = category => {
    category === 'all'
      ? [setProductsCat(initialState), setActive(true)]
      : [
          setProductsCat(
            products.filter(i => i.category._id === category),
            setActive(true),
          ),
        ];
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <ProductList item={item} navigation={props.navigation} />
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <View>
          <Banner />
        </View>
        <View>
          <CategoryFilter
            catData={categories}
            categoryFilter={changeCategories}
            productsCat={productsCat}
            active={active}
            setActive={setActive}
          />
        </View>
      </>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View
        style={{
          margin: 15,
          backgroundColor: '#F35162',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: '#F8FCFF',
            textAlign: 'center',
          }}>
          {'No Products Found!'}
        </Text>
      </View>
    );
  };

  const _keyExtractor = item => item._id;

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
        <View style={styles.productContainer}>
          <FlashList
            estimatedItemSize={277}
            numColumns={2}
            data={productsCat}
            renderItem={renderItem}
            ListHeaderComponent={ListHeaderComponent}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={_keyExtractor}
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
    },
    productContainer: {
      flex: 1,
      backgroundColor: 'gainsboro',
    },
  });
export default HomeScreen;
