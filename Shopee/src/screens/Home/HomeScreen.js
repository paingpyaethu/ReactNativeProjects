/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, FlatList, StyleSheet} from 'react-native';
import CustomSearchBar from '../../components/molecules/CustomSearchBar';
import Banner from '../../components/organisms/Home/Banner';
import CategoryFilter from '../../components/organisms/Home/Categories/CategoryFilter';
import ProductList from '../../components/organisms/Home/Products/ProductList';
import {useOrientation} from '../../hooks/useOrientation';

const data = require('../../assets/data/products.json');
const categoriesData = require('../../assets/data/categories.json');
import SearchedProducts from './SearchedProducts';

const HomeScreen = () => {
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
        <ScrollView>
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
          {productsCat && productsCat.length > 0 ? (
            <View style={styles.productContainer}>
              {productsCat.map(item => {
                return <ProductList key={item._id} item={item} />;
              })}
            </View>
          ) : (
            <View
              style={{
                margin: 15,
                backgroundColor: '#F35162',
                padding: 10,
                borderRadius: 5,
              }}>
              <Text style={{color: '#F8FCFF', textAlign: 'center'}}>
                {'No Products Found!'}
              </Text>
            </View>
          )}
        </ScrollView>
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
    productContainer: {
      flex: 1,
      backgroundColor: 'gainsboro',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
export default HomeScreen;
