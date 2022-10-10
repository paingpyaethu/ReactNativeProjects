import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Separator from '../../components/atoms/Separator';
import Colors from '../../theme/Colors';
import Metrics from '../../theme/Metrics';
import Fonts from '../../theme/Fonts';
import {useOrientation} from '../../hooks/useOrientation';
import GetStartedButton from '../../components/molecules/WelcomeButtons/GetStartedButton';

const ForgotPwdScreen = props => {
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
      {/* Header Forgot Password */}
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back"
          size={Metrics._scale(30)}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Forgot Password</Text>
      </View>

      {/* Forgot Password Title */}
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.content}>
        Please enter your email, so that we can help you to recover your
        password
      </Text>

      {/* InputContainer */}
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={Metrics._scale(18)}
            color={Colors.DEFAULT_GREY}
            style={{marginRight: Metrics._scale(10)}}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={15} />

      {/* Reset Pwd Button */}
      <GetStartedButton
        btnText="Reset Password"
        btn={styles.resetPwd}
        btnTextDesign={styles.resetPwdText}
      />
      <Separator height={15} />
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

    //*** Welcome Header Title ***//
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

    //*** Input Containers ***//
    inputContainer: {
      backgroundColor: Colors.LIGHT_GREY,
      paddingHorizontal: Metrics._scale(10),
      marginHorizontal: Metrics._scale(20),
      borderRadius: Metrics._scale(8),
      borderWidth: 1,
      borderColor: Colors.INACTIVE_GREY,
      justifyContent: 'center',
    },
    inputSubContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputText: {
      flex: 1,
      fontSize: Metrics._scale(15),
      textAlignVertical: 'center',
      padding: 0,
      height: (orientation.height / 100) * 5,
      color: Colors.DEFAULT_BLACK,
    },

    //*** Create Account Button ***//
    resetPwd: {
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
    resetPwdText: {
      fontSize: Metrics._scale(16),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_WHITE,
      lineHeight: Metrics._scale(16 * 1.4),
    },
  });

export default ForgotPwdScreen;
