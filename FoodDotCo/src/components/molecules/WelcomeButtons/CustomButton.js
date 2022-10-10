import {TouchableOpacity, Text} from 'react-native';
import React from 'react';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={props.btn}
      activeOpacity={0.8}
      onPress={props.onPress}>
      <Text style={props.btnTextDesign}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
