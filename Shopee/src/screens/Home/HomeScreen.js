/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useContext} from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import axios from 'axios';

import CustomSearchBar from '../../components/molecules/CustomSearchBar';
import Banner from '../../components/organisms/Home/Banner';
import CategoryFilter from '../../components/organisms/Home/Categories/CategoryFilter';
import ProductList from '../../components/organisms/Home/Products/ProductList';

import SearchedProducts from './SearchedProducts';

import {BASE_URL} from '../../store/api_endpoint';
import {COLORS, FONTS, METRICS} from '../../theme';
import {AxiosContext} from '../../contexts/AxiosContext';

const HomeScreen = ({navigation}) => {
  const authContext = useContext(AxiosContext);
  const {authAxios} = authContext;

  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [focus, setFocus] = useState();

  const [categories, setCategories] = useState([]);
  const [productsCat, setProductsCat] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      // console.log('Home Screen Rendered!');

      // eslint-disable-next-line no-undef
      const abortController = new AbortController();

      setFocus(false);
      setActive('all');

      authAxios
        .get(`${BASE_URL}/products`, {signal: abortController.signal})
        .then(res => {
          setProducts(res.data.data);
          setProductFiltered(res.data.data);
          setProductsCat(res.data.data);
          setInitialState(res.data.data);
          setLoading(false);
        })
        .catch(error => {
          console.log('Api call error');
        });

      authAxios
        .get(`${BASE_URL}/categories`, {signal: abortController.signal})
        .then(res => {
          setCategories(res.data);
        })
        .catch(error => {
          console.log('Api call error');
        });

      return () => {
        abortController.abort();
      };
    }, [authAxios]),
  );

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
    <>
      {loading === false ? (
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
              <Banner />
              <CategoryFilter
                catData={categories}
                categoryFilter={changeCategories}
                active={active}
                setActive={setActive}
              />

              {productsCat.length > 0 ? (
                <View style={styles.productContainer}>
                  {productsCat.map(item => {
                    return (
                      <ProductList
                        key={item._id}
                        item={item}
                        navigation={navigation}
                      />
                    );
                  })}
                </View>
              ) : (
                <View
                  style={{
                    margin: METRICS._scale(15),
                    backgroundColor: COLORS.DEFAULT_RED,
                    padding: METRICS._scale(10),
                    borderRadius: METRICS._scale(5),
                  }}>
                  <Text
                    style={{
                      color: '#F8FCFF',
                      textAlign: 'center',
                      fontFamily: FONTS.MONTSERRAT_MEDIUM,
                      fontSize: METRICS._scale(14),
                      lineHeight: METRICS._scale(14 * 1.4),
                    }}>
                    {'No Products Found!'}
                  </Text>
                </View>
              )}
            </ScrollView>
          )}
        </View>
      ) : (
        <View
          style={{
            backgroundColor: '#f2f2f2',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    flex: 1,
    backgroundColor: 'gainsboro',

    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default HomeScreen;
