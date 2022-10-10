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

const RegisterPhoneScreen = props => {
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
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Register Phone</Text>
      </View>

      {/* Register Phone Title */}
      <Text style={styles.title}>Register Phone</Text>
      <Text style={styles.content}>
        Enter your registered phone number to login
      </Text>

      <View style={styles.inputContainer}>
        <PhoneInput
          defaultCode="MM"
          layout="first"
          withDarkTheme
          withShadow
          autoFocus
          containerStyle={styles.countryListContainer}
          textContainerStyle={styles.phoneInputContainer}
          textInputStyle={{padding: 0, fontSize: Metrics._scale(16)}}
          codeTextStyle={{fontSize: Metrics._scale(16)}}
        />
      </View>

      {/* Continue Button */}
      <CustomButton
        btnText="Continue"
        btn={styles.continueBtn}
        btnTextDesign={styles.continueBtnText}
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

    inputContainer: {
      marginVertical: Metrics._scale(48),
    },
    countryListContainer: {
      marginLeft: Metrics._scale(19),
      backgroundColor: Colors.LIGHT_GREY2,
      width: orientation.width * 0.897,
      height: (orientation.height / 100) * 8,
      borderRadius: Metrics._scale(8),
      borderWidth: 0.5,
      borderColor: Colors.LIGHT_GREY2,
    },
    phoneInputContainer: {
      backgroundColor: Colors.LIGHT_GREY,
      borderColor: Colors.LIGHT_GREY2,
    },

    //*** Continue Button ***//
    continueBtn: {
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
    continueBtnText: {
      fontSize: Metrics._scale(16),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_WHITE,
      lineHeight: Metrics._scale(16 * 1.4),
    },
  });

export default RegisterPhoneScreen;
