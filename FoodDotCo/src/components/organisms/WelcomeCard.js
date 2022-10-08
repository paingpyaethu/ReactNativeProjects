import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useOrientation} from '../../hooks/useOrientation';

import Metrics from '../../theme/Metrics';
import Fonts from '../../theme/Fonts';
import Images from '../../theme/Images';

const WelcomeCard = ({title, content, image}) => {
  const orientation = useOrientation();
  const styles = customStyle(orientation);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images[image]} resizeMode="contain" />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: orientation.width,
    },
    image: {
      width: (orientation.width / 100) * 60,
      height: (orientation.height / 100) * 30,
    },
    titleText: {
      fontSize: Metrics._scale(21),
      fontFamily: Fonts.POPPINS_BOLD,
      marginBottom: Metrics._scale(14),
    },
    contentText: {
      fontSize: Metrics._scale(17),
      fontFamily: Fonts.POPPINS_LIGHT,
      textAlign: 'center',
      marginHorizontal: Metrics._scale(19),
    },
  });

export default WelcomeCard;
