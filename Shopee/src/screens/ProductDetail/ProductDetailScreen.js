import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Metrics from '../../theme/Metrics';
import {useOrientation} from '../../hooks/useOrientation';

const ProductDetailScreen = ({route, navigation}) => {
  const {productDetail} = route.params;

  const orientation = useOrientation();
  const styles = customStyle(orientation);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={Metrics._scale(28)}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '90%',
            alignItems: 'center',
          }}>
          <Text style={styles.headerText}>ProductDetail</Text>
        </View>
      </View>

      <ScrollView>
        <Image
          source={{
            uri: productDetail.image
              ? productDetail.image
              : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.contentHeader}>{productDetail.name}</Text>
          <Text style={styles.contentText}>
            {productDetail.brand.toUpperCase()}
          </Text>
        </View>
        <Text>{productDetail.description}</Text>

        <View style={{height: Metrics._scale(30)}} />
        {/* TODO: Description, Rish Description and Availability */}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Text style={styles.price}>$ {productDetail.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: Metrics._scale(15),
    },
    headerText: {
      fontSize: Metrics._scale(18),
      fontWeight: '600',
    },
    image: {
      width: orientation.width,
      height: orientation.height / 3,
    },
    contentContainer: {
      marginTop: Metrics._scale(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentHeader: {
      fontWeight: 'bold',
      fontSize: Metrics._scale(24),
      marginBottom: Metrics._scale(14),
    },
    contentText: {
      fontWeight: '600',
      fontSize: Metrics._scale(16),
      marginBottom: Metrics._scale(14),
    },

    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: Metrics._scale(15),
      marginBottom: Metrics._scale(5),
    },
    price: {
      fontSize: Metrics._scale(18),
      fontWeight: '500',
      color: '#cb3b3b',
    },
    addBtn: {
      backgroundColor: '#17b978',
      paddingVertical: Metrics._scale(10),
      paddingHorizontal: Metrics._scale(30),
      borderRadius: Metrics._scale(5),
    },
    addBtnText: {
      fontSize: Metrics._scale(14),
      fontWeight: '600',
      color: '#fdfdfd',
    },
  });
export default ProductDetailScreen;
