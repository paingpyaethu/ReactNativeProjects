import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, METRICS} from '../../../themes';

const CheckoutSteps = ({activeTab}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepsContainer}>
        <View style={styles.steps}>
          <IonIcons
            name="navigate-circle-outline"
            size={METRICS.width * 0.07}
            color={
              activeTab === 1 ? COLORS.DEFAULT_GREEN : COLORS.SECONDARY_COLOR
            }
          />
          <Text style={styles.txt}>Shipping</Text>
        </View>
        <View style={styles.steps}>
          <IonIcons
            name="checkmark-circle-outline"
            size={METRICS.width * 0.07}
            color={
              activeTab === 2 ? COLORS.DEFAULT_GREEN : COLORS.SECONDARY_COLOR
            }
          />
          <Text style={styles.txt}>Confirmation</Text>
        </View>
        <View style={styles.steps}>
          <IonIcons
            name="wallet-outline"
            size={METRICS.width * 0.07}
            color={
              activeTab === 3 ? COLORS.DEFAULT_GREEN : COLORS.SECONDARY_COLOR
            }
          />
          <Text style={styles.txt}>Payment</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckoutSteps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: METRICS.width * 0.03,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: METRICS.width * 0.04,
  },
  steps: {
    alignItems: 'center',
  },
  txt: {
    color: COLORS.DARK_GREY,
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.width * 0.035,
    marginTop: METRICS.width * 0.01,
  },
});
