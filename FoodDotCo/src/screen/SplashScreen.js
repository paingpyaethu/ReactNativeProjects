import React from 'react';
import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import {useOrientation} from '../hooks/useOrientation';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import Images from '../theme/Images';
import Metrics from '../theme/Metrics';

const SplashScreen = ({navigation}) => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.PRIMARY_COLOR}
        translucent
      />
      <Image source={Images.LOGO} resizeMode={'contain'} style={styles.image} />
      <Text style={styles.titleText}>FooDotCo</Text>
    </View>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.PRIMARY_COLOR,
    },
    image: {
      height: (orientation.height / 100) * 20,
      width: (orientation.width / 100) * 50,
    },
    titleText: {
      color: Colors.SECONDARY_BLACK,
      fontSize: Metrics._scale(30),
      fontFamily: Fonts.POPPINS_MEDIUM,
    },
  });
export default SplashScreen;
