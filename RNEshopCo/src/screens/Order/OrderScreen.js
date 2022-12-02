import React, {useContext, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text, StatusBar} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import OrderItem from '../../components/organisms/Order/OrderItem';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../stores/slices/orders/orderSlice';
import {AxiosContext} from '../../contexts/AxiosContext';

const OrderScreen = () => {
  const navigation = useNavigation();
  const {authAxios} = useContext(AxiosContext);
  const {orderData} = useSelector(state => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(authAxios));
  }, [authAxios, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <OrderItem navigation={navigation} orderData={orderData} />
      {/* <Text>{JSON.stringify(orderData, null, 2)}</Text> */}
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
});
