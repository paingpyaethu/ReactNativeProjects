/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {useOrientation} from '../../../hooks/useOrientation';

const Banner = () => {
  const orientation = useOrientation();
  const styles = responsiveStyle(orientation);

  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      require('../../../assets/img/banner/headphone-banner.jpeg'),
      require('../../../assets/img/banner/shoe-banner.png'),
      require('../../../assets/img/banner/iphone-banner.jpeg'),
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SliderBox
          images={bannerData}
          dotColor="#343434"
          autoplay={true}
          circleLoop={true}
          ImageComponentStyle={styles.imageComponentStyle}
        />
        <View style={{height: 20}} />
      </View>
    </ScrollView>
  );
};

const responsiveStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gainsboro',
    },
    imageComponentStyle: {
      borderRadius: 15,
      width: orientation.width * 0.95,
      height: orientation.width / 2,
      marginTop: 10,
    },
  });
export default Banner;
