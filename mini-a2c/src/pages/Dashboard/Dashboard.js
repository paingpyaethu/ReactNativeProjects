import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
// Components
import styles from './Style';
import {AuthContext} from '@context/context';
import {appStorage} from '../../utils';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import ProductList from '@components/dashboard/products/ProductList';
import {useLocal} from '../../hook';

// From Redux action
import * as ActionProducts from '../../store/action/Product';

// Data
import Products from '../../data/Products';

const Dashboard = ({navigation}) => {
  const {getAuth, userInfo} = useContext(AuthContext);

  const local = useLocal();
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      const data = appStorage.getItem('@user.data');
      console.log('user data ::', data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeHandler = () => {
    try {
      appStorage.removeItem('@user.data');
      getAuth(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const addToCartHandler = () => {
    ToastAndroid.show(local.successAdded, ToastAndroid.SHORT);
  };
  const detailHandler = value => {
    dispatch(ActionProducts.addProducts(value));
    navigation.navigate('ProductDetail', {data: value});
  };

  return (
    <View style={styles.container}>
      {/* user information */}
      <DashboardHeader
        data={userInfo}
        logout={removeHandler}
        logoutTitle={local.logout}
      />
      {/* product list */}
      <ProductList
        data={Products}
        priceTitle={local.price}
        addToCartTitle={local.addToCart}
        addToCartAction={addToCartHandler}
        productDetail={detailHandler}
      />
    </View>
  );
};

export default Dashboard;
