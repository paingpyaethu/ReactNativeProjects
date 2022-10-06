import React from 'react';
import {View, Text, StatusBar, Image, StyleSheet} from 'react-native';
import {useOrientation} from '../hooks/useOrientation';
import Colors from '../theme/Colors';
import FontType from '../theme/Fonts';
import {_fontScale} from '../theme/Metrics';

const SplashScreen = () => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image
        source={require('../assets/images/logo.png')}
        resizeMode={'contain'}
        style={styles.image}
      />
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
      backgroundColor: Colors.DEFAULT_GREEN,
    },
    image: {
      height: (orientation.height / 100) * 20,
      width: (orientation.width / 100) * 50,
    },
    titleText: {
      color: Colors.SECONDARY_BLACK,
      fontSize: _fontScale(30),
      fontFamily: FontType.POPPINS_MEDIUM,
    },
  });
export default SplashScreen;
