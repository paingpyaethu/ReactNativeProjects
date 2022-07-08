import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

// Components
import {useLocal} from '../../hook';

// Icons
import Cart from '@assets/icons/cart';

// Style
import styles from './style';

const ProductDetailScreen = ({route}) => {
  const {data} = route.params;
  const local = useLocal();
  const [photos, setPhotos] = useState([]);

  const products = useSelector(state => state.productList.products);

  useEffect(() => {
    // fetchData();
    console.log('redux data ::::', products);
  }, [products]);

  // const uploadImage = async () => {
  //   launchImageLibrary().then(res => {
  //     try {
  //       if (photos.length >= 1) {
  //         // merge photo
  //         setPhotos(photos.concat(res.assets));
  //       } else {
  //         setPhotos(res.assets);
  //       }
  //     } catch (error) {
  //       console.log('error ::', error);
  //     }
  //   });
  // };

  // const fetchData = async () => {
  //   const uploadDdata = new FormData();
  //   let data = {
  //     title: data.title,
  //     price: data.price,
  //   };
  //   uploadDdata.append('data', data);
  //   photos.map(photo => {
  //     uploadDdata.append('images[]', {
  //       type: photo.type,
  //       name: photo.fileName,
  //       uri: photo.uri,
  //       width: photo.width,
  //       height: photo.height,
  //     });
  //   });
  //   // for (const key in photos) {
  //   //   uploadDdata.append('images[]', {
  //   //     type: photos[key].type,
  //   //     name: photos[key].fileName,
  //   //     uri: photos[key].uri,
  //   //     width: photos[key].width,
  //   //     height: photos[key].height,
  //   //   });

  //   const response = await fetchMultiPost(apiUrl.posts, uploadDdata);
  //   console.log('response data ::', response);
  // };

  const addToCart = () => {
    ToastAndroid.show(local.successAdded, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={data.imageUrl} style={styles.productImage} />
      </View>

      <View style={styles.details}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text>
            {local.price} - {data.price} {data.currency}
          </Text>
        </View>
        <TouchableOpacity style={styles.btnContainer} onPress={addToCart}>
          <Cart width={wp(5)} height={hp(3)} />
          <Text style={styles.addToCartTitle}>{local.addToCart}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.description}>
        <Text>{data.description}</Text>
      </View>

      {/* <TouchableOpacity onPress={uploadImage} style={{marginTop: 40}}>
        <Text>Upload Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={fetchData} style={{marginTop: 40}}>
        <Text>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default ProductDetailScreen;
