import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import {METRICS, COLORS} from '../../../themes';

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      require('../../../assets/images/banner/headphone-banner.jpeg'),
      require('../../../assets/images/banner/iphone-banner.jpeg'),
      require('../../../assets/images/banner/shoe-banner.png'),
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <View style={styles.container}>
      <SliderBox
        images={bannerData}
        sliderBoxHeight={METRICS._scale(180)}
        inactiveDotColor="#FCE6CD"
        dotColor={COLORS.PRIMARY_COLOR}
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
    backgroundColor: COLORS.NORMAL_GREY,
  },
  dotStyle: {
    width: METRICS._scale(5),
    height: METRICS._scale(5),
    borderRadius: METRICS._scale(5),
    padding: METRICS._scale(5),
    marginVertical: METRICS._scale(10),
  },
  imageComponentStyle: {
    borderRadius: METRICS._scale(15),
    width: '97%',
    marginVertical: METRICS._scale(6),
  },
});

export default Banner;
