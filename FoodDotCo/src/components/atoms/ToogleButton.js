import React, {useState} from 'react';
import {TouchableOpacity, Animated, Easing} from 'react-native';
import Colors from '../../theme/Colors';
import Metrics from '../../theme/Metrics';

const containerStyle = (size, isActive) => ({
  backgroundColor: isActive ? Colors.PRIMARY_COLOR : Colors.DEFAULT_GREY,
  height: Metrics._scale(12 * size),
  width: Metrics._scale(24 * size),
  borderRadius: Metrics._scale(12 * size),
  padding: Metrics._scale(2),
});

const toogleStyle = (size, animatedValue) => ({
  height: Metrics._scale(8 * size),
  width: Metrics._scale(8 * size),
  backgroundColor: Colors.DEFAULT_WHITE,
  borderRadius: Metrics._scale(15 * size),
  transform: [{translateX: animatedValue}],
});

const ToogleButton = ({size}) => {
  const [isActive, setIsActive] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const toogleHandler = () => {
    Animated.timing(animatedValue, {
      toValue: isActive ? 0 : Metrics._scale(12),
      duration: 250,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    }).start();
    setIsActive(!isActive);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={containerStyle(size, isActive)}
      onPress={() => toogleHandler()}>
      <Animated.View style={toogleStyle(size, animatedValue)} />
    </TouchableOpacity>
  );
};

export default ToogleButton;
