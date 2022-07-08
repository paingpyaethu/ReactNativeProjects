import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// From Redux action
import * as ActionProducts from '../../store/action/Product';

// components
import OrderContent from '../../components/product/OrderContent';
import styles from './style';

const Order = () => {
  const dispatch = useDispatch();
  const orderList = useSelector(state => state.productList.orders);

  useEffect(() => {
    console.log('order item -------', orderList);
  }, [orderList]);

  const deleteHandler = id => {
    dispatch(ActionProducts.orderProductDelete(id));
    console.log('Delete Order...', id);
  };
  return (
    <View style={styles.container}>
      <OrderContent data={orderList} deleteHandler={deleteHandler} />
    </View>
  );
};

export default Order;
