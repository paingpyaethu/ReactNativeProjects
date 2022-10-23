import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import Colors from '../../../themes/Colors';
import Metrics from '../../../themes/Metrics';

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
        sliderBoxHeight={Metrics._scale(180)}
        inactiveDotColor="#FCE6CD"
        dotColor={Colors.PRIMARY_COLOR}
        dotStyle={styles.dotStyle}
        // autoplay={true}
        // circleLoop={true}
        ImageComponentStyle={styles.imageComponentStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.NORMAL_GREY,
  },
  dotStyle: {
    width: Metrics._scale(5),
    height: Metrics._scale(5),
    borderRadius: Metrics._scale(5),
    padding: Metrics._scale(5),
    marginVertical: Metrics._scale(10),
  },
  imageComponentStyle: {
    borderRadius: Metrics._scale(15),
    width: '97%',
    marginVertical: Metrics._scale(6),
  },
});

export default Banner;
