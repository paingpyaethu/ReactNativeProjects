import React from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, METRICS} from '../../theme';

const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="small" color={COLORS.PRIMARY_COLOR} />
          <Text style={style.loadingText}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: METRICS._scale(50),
    backgroundColor: '#fff',
    marginHorizontal: METRICS._scale(80),
    borderRadius: METRICS._scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: METRICS._scale(20),
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  loadingText: {
    marginLeft: METRICS._scale(10),
    fontSize: METRICS._scale(14),
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
  },
});

export default Loader;
