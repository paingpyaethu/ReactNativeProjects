import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

import Separator from '../../atoms/Separator';

import Metrics from '../../../theme/Metrics';
import Colors from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';

import SortListTabBar from '../../atoms/Restaurants/SortListTabBar';
import SortListItemCard from '../../molecules/Home/SortListItemCard';
import {useOrientation} from '../../../hooks/useOrientation';
import RestaurantCard from '../../molecules/Home/RestaurantCard';

const sortStyle = isActive => {
  isActive
    ? styles.sortListItem
    : {...styles.sortListItem, borderBottomColor: Colors.DEFAULT_BLACK};
};

const RestaurantList = ({restaurantData, navigation}) => {
  const orientation = useOrientation();
  return (
    <>
      <View style={styles.horizontalListContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderTitle}>Top Rated</Text>
          <Text style={styles.listHeaderSubTitle}>See all</Text>
        </View>
        <FlatList
          data={restaurantData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <Separator width={Metrics._scale(15)} />}
          ListFooterComponent={() => <Separator width={Metrics._scale(15)} />}
          ItemSeparatorComponent={() => (
            <Separator width={Metrics._scale(15)} />
          )}
          renderItem={({item}) => (
            <RestaurantCard
              item={item}
              navigate={restaurantId =>
                navigation.navigate('RestaurantScreen', {restaurantId})
              }
            />
          )}
        />
      </View>
      <SortListTabBar />

      <Separator height={(orientation.height / 100) * 1} />

      {restaurantData
        ? restaurantData.map(data => (
            <SortListItemCard data={data} key={data.id} />
          ))
        : null}

      <Separator height={Metrics._scale(40)} />
    </>
  );
};

const styles = StyleSheet.create({
  horizontalListContainer: {
    marginTop: Metrics._scale(30),
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Metrics._scale(20),
    marginBottom: Metrics._scale(10),
  },
  listHeaderTitle: {
    color: Colors.DEFAULT_BLACK,
    fontSize: Metrics._scale(13),
    lineHeight: Metrics._scale(13 * 1.4),
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  listHeaderSubTitle: {
    color: Colors.DEFAULT_YELLOW,
    fontSize: Metrics._scale(13),
    lineHeight: Metrics._scale(13 * 1.4),
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
export default RestaurantList;
