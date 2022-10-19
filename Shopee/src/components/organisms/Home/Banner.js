import React, {useState, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {useOrientation} from '../../../hooks/useOrientation';
import Metrics from '../../../theme/Metrics';

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
    <View style={styles.container}>
      <SliderBox
        images={bannerData}
        inactiveDotColor="#FCE6CD"
        dotColor="#343434"
        dotStyle={styles.dotStyle}
        autoplay={true}
        circleLoop={true}
        ImageComponentStyle={styles.imageComponentStyle}
      />
    </View>
  );
};

const responsiveStyle = orientation =>
  StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: 'gainsboro',
    },
    dotStyle: {
      width: Metrics._scale(10),
      height: Metrics._scale(10),
      borderRadius: Metrics._scale(5),
      padding: Metrics._scale(8),
    },
    imageComponentStyle: {
      borderRadius: Metrics._scale(15),
      width: orientation.width * 0.95,
      height: orientation.width / 2,
      marginVertical: Metrics._scale(10),
    },
  });
export default Banner;
