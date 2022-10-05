import React, {useState, useEffect} from 'react';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
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
        <View style={styles.swiper}>
          {/* <Swiper
            style={{height: orientation.width / 2, backgroundColor: 'black'}}
            showsButtons={false}
            // autoplay={true}
            autoplayTimeout={2}>
            {bannerData.map(item => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={item}
                />
              );
            })}
          </Swiper> */}
        </View>
      </View>
    </ScrollView>
  );
};

const responsiveStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
    },
    swiper: {
      width: orientation.width,
      alignItems: 'center',
      marginTop: 10,
    },
    imageBanner: {
      height: orientation.width / 2,
      width: orientation.width - 40,
      borderRadius: 10,
      marginHorizontal: 20,
    },
  });
export default Banner;
