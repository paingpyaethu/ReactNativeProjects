import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

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
