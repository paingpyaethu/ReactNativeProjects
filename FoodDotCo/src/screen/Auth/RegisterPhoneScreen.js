import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Separator from '../../components/atoms/Separator';
import Colors from '../../theme/Colors';
import Metrics from '../../theme/Metrics';
import Fonts from '../../theme/Fonts';
import {useOrientation} from '../../hooks/useOrientation';
import GetStartedButton from '../../components/molecules/WelcomeButtons/GetStartedButton';

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
        <TouchableOpacity style={styles.countryListContainer}>
          <Image />
          <Text></Text>
          <MaterialIcons />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput />
        </View>
      </View>
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
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: Metrics._scale(20),
      marginVertical: Metrics._scale(48),
    },
    countryListContainer: {
      backgroundColor: Colors.LIGHT_GREY,
      width: (orientation.width / 100) * 22,
      height: (orientation.height / 100) * 6,
      marginRight: Metrics._scale(10),
      borderRadius: Metrics._scale(8),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: Colors.LIGHT_GREY2,
    },
    phoneInputContainer: {
      flex: 1,
      backgroundColor: Colors.LIGHT_GREY,
      paddingHorizontal: Metrics._scale(10),
      borderRadius: Metrics._scale(8),
      borderWidth: 0.5,
      borderColor: Colors.LIGHT_GREY2,
      justifyContent: 'center',
      height: (orientation.height / 100) * 6,
    },
  });

export default RegisterPhoneScreen;
