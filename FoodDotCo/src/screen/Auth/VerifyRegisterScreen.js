/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';

import Separator from '../../components/atoms/Separator';
import Colors from '../../theme/Colors';
import Metrics from '../../theme/Metrics';
import Fonts from '../../theme/Fonts';
import {useOrientation} from '../../hooks/useOrientation';

import CustomButton from '../../components/molecules/WelcomeButtons/CustomButton';
import PhoneInput from 'react-native-phone-number-input';

const VerifyRegisterScreen = ({route, navigation}) => {
  const {data} = route.params;
  const orientation = useOrientation();
  const styles = customStyle(orientation);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {/* Header Register Phone */}
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back"
          size={Metrics._scale(30)}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>

      {/* Register Phone Title */}
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.content}>
        Enter the OTP number just sent you at{' '}
        <Text style={styles.phoneNoText}>{data}</Text>
      </Text>

      {/* Continue Button */}
      <CustomButton
        btnText="Submit"
        btn={styles.submitBtn}
        btnTextDesign={styles.submitBtnText}
        onPress={() => navigation.navigate('RegisterPhoneScreen')}
      />
    </SafeAreaView>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Metrics._scale(10),
      paddingHorizontal: Metrics._scale(10),
    },
    headerTitle: {
      fontSize: Metrics._scale(20),
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: Metrics._scale(20 * 1.4),
      width: (orientation.width / 100) * 80,
      textAlign: 'center',
    },

    //*** Register Phone Header Title ***//
    title: {
      fontSize: Metrics._scale(18),
      fontFamily: Fonts.POPPINS_MEDIUM,
      marginTop: Metrics._scale(10),
      marginBottom: Metrics._scale(10),
      marginHorizontal: Metrics._scale(20),
    },
    content: {
      fontSize: Metrics._scale(13),
      fontFamily: Fonts.POPPINS_REGULAR,
      marginBottom: Metrics._scale(20),
      marginHorizontal: Metrics._scale(20),
      color: Colors.DARK_THREE,
    },
    phoneNoText: {
      fontSize: Metrics._scale(13),
      fontFamily: Fonts.POPPINS_REGULAR,
      color: Colors.DEFAULT_YELLOW,
      lineHeight: Metrics._scale(13 * 1.4),
    },

    //*** Continue Button ***//
    submitBtn: {
      backgroundColor: Colors.PRIMARY_COLOR,
      paddingVertical: Metrics._scale(8),
      paddingHorizontal: Metrics._scale(30),
      marginHorizontal: Metrics._scale(20),
      marginTop: Metrics._scale(18),
      borderRadius: Metrics._scale(8),

      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    submitBtnText: {
      fontSize: Metrics._scale(16),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_WHITE,
      lineHeight: Metrics._scale(16 * 1.4),
    },
  });

export default VerifyRegisterScreen;
