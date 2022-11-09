import React, {useContext, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';
import {AxiosContext} from '../../contexts/AxiosContext';
import CustomSearchBar from '../../components/molecules/CustomSearchBar';
import {COLORS, FONTS, METRICS} from '../../theme';
import ListItem from '../../components/organisms/Home/Products/Admin/ListItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  getAllProducts,
  getFilterProducts,
} from '../../store/services/ProductServices';
import ModalButton from '../../components/atoms/ModalButton';

const ProductsScreen = props => {
  const authContext = useContext(AxiosContext);
  const {authAxios} = authContext;

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  console.log('ProductList:::', products);

  const productData = products.products;
  const filteredProductData = products.filteredProducts;

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      if (mounted) {
        dispatch(getAllProducts(authAxios));
      }
      return () => {
        mounted = false;
      };
    }, [authAxios, dispatch]),
  );

  const _listHeader = () => {
    return (
      <View style={styles.listHeader}>
        <View style={styles.headerItem} />
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>Brand</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>Name</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>Category</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>Price</Text>
        </View>
      </View>
    );
  };
  const _renderItem = ({item, index}) => {
    return (
      <ListItem product={item} navigation={props.navigation} index={index} />
    );
  };

  const searchProduct = text => {
    dispatch(getFilterProducts(text, productData));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.btnContainer}>
        <ModalButton
          iconName={'shopping-bag'}
          btnText={'Order'}
          bgColor={COLORS.FOCUS_COLOR}
          onPress={() => props.navigation.navigate('Admin Orders')}
        />
        <ModalButton
          iconName={'add-circle-outline'}
          btnText={'Products'}
          bgColor={COLORS.FOCUS_COLOR}
          onPress={() => props.navigation.navigate('Admin Product Form')}
        />
        <ModalButton
          iconName={'add-circle-outline'}
          btnText={'Categories'}
          bgColor={COLORS.FOCUS_COLOR}
          onPress={() => props.navigation.navigate('Admin Categories')}
        />
      </View>
      <CustomSearchBar onChangeText={text => searchProduct(text)} />

      {products.isLoading === true ? (
        <View style={styles.spinner}>
          <ActivityIndicator size={'large'} color={COLORS.PRIMARY_COLOR} />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredProductData}
          renderItem={_renderItem}
          ListHeaderComponent={_listHeader}
          keyExtractor={i => i.id}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: METRICS._scale(20),
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: METRICS._scale(6),
    backgroundColor: COLORS.GAINSBORO,
  },
  headerItem: {
    width:
      METRICS.width >= 768
        ? METRICS.width / METRICS._scale(2.5)
        : METRICS.width / METRICS._scale(5),
  },
  headerText: {
    fontFamily: FONTS.MONTSERRAT_BOLD,
    fontSize: METRICS._scale(12),
    lineHeight: METRICS._scale(12 * 1.4),
    color: COLORS.DARK_GREY,
  },
  spinner: {
    height: METRICS.height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
