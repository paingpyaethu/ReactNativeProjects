import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Categories} from '../../../assets/data/Categories';
import {COLORS, FONTS, METRICS} from '../../../themes';
import ProductCard from '../../molecules/Home/ProductCard';

const FilterProducts = ({navigation}) => {
  const products = useSelector(state => state.products.products);
  const [active, setActive] = useState('All');
  const [data, setData] = useState(products);

  const filteredProduct = catActive => {
    if (catActive !== 'All') {
      setData(products.filter(item => item.category === catActive));
    } else {
      setData(products);
    }
    setActive(catActive);
  };

  const _renderComponent = ({item}) => (
    <ProductCard product={item} navigation={navigation} />
  );
  const _listEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponentStyle}>
        <Text style={styles.listEmptyComponentTxtStyle}>
          {'No Products Found!'}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.catContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Categories.map(i => (
            <TouchableOpacity
              key={i.id}
              style={[styles.name, active === i.name && styles.nameActive]}
              onPress={() => filteredProduct(i.name)}>
              <Text style={styles.nameTxt}>{i.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderComponent}
        ListEmptyComponent={_listEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FilterProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  catContainer: {
    marginVertical: METRICS._scale(10),
    paddingVertical: METRICS._scale(10),
    backgroundColor: COLORS.LIGHT_GREY,
  },
  name: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    marginHorizontal: METRICS._scale(5),
    paddingHorizontal: METRICS._scale(8),
    height: METRICS.height / 30,
    borderRadius: METRICS._scale(15),
    alignItems: 'center',
  },
  nameActive: {
    backgroundColor: COLORS.SECONDARY_COLOR,
  },

  nameTxt: {
    color: '#fff',
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 70,
    lineHeight: METRICS.height / 30,
  },

  listEmptyComponentStyle: {
    margin: METRICS._scale(15),
    backgroundColor: COLORS.DEFAULT_RED,
    padding: METRICS._scale(10),
    borderRadius: METRICS._scale(5),
  },
  listEmptyComponentTxtStyle: {
    color: '#F8FCFF',
    textAlign: 'center',
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 55,
  },
});
