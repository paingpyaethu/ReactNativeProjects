import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {METRICS} from '../../../theme';

const Banner = () => {
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'gainsboro',
  },
  dotStyle: {
    width: METRICS._scale(10),
    height: METRICS._scale(10),
    borderRadius: METRICS._scale(5),
    padding: METRICS._scale(8),
  },
  imageComponentStyle: {
    borderRadius: METRICS._scale(15),
    width: METRICS.width * 0.95,
    height: METRICS.width / 2,
    marginVertical: METRICS._scale(10),
  },
});
export default Banner;
