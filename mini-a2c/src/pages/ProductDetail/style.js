import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    paddingVertical: hp(2),
  },
  productImage: {
    width: wp(100),
    height: hp(20),
    resizeMode: 'contain',
  },
  details: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: '#ff8800',
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.5),
    borderRadius: hp(5),
    flexDirection: 'row',
  },
  addToCartTitle: {
    color: '#fff',
    marginLeft: hp(1),
  },
  description: {
    width: wp(100),
    marginTop: hp(1),
    paddingHorizontal: hp(2),
  },
});

export default styles;
