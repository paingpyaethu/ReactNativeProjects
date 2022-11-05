/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {COLORS, FONTS, METRICS} from '../../../theme';

const CustomInput = ({
  label,
  iconName,
  error,
  password,
  name,
  value,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? COLORS.DEFAULT_RED
              : isFocused
              ? COLORS.FOCUS_COLOR
              : COLORS.NORMAL_GREY,
          },
        ]}>
        <MaterialIcons
          name={iconName}
          size={METRICS._scale(20)}
          color={COLORS.SECONDARY_COLOR}
          style={{marginRight: METRICS._scale(15)}}
        />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          name={name}
          value={value}
          style={styles.textInput}
          {...props}
        />
        {password && (
          <IonIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            size={METRICS._scale(20)}
            color={COLORS.SECONDARY_COLOR}
          />
        )}
      </View>
      {error && <Text style={styles.errMsg}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: METRICS._scale(10),
  },
  label: {
    marginBottom: METRICS._scale(5),
    fontSize: METRICS._scale(14),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  inputContainer: {
    height: METRICS._scale(50),
    backgroundColor: '#fff',
    borderWidth: METRICS._scale(2),
    borderRadius: METRICS._scale(6),

    paddingHorizontal: METRICS._scale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: '#390B12',
    fontSize: METRICS._scale(14),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
  errMsg: {
    color: '#EF452C',
    fontSize: METRICS._scale(12),
    lineHeight: METRICS._scale(12 * 1.4),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    marginTop: METRICS._scale(4),
  },
});
export default CustomInput;
