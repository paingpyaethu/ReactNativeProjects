import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: wp(95),
    height: hp(9),
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: hp(0.5),
    shadowOffset: {width: 0, height: 8},
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: hp(1),
    elevation: 3,
  },
  leftContainer: {
    height: '100%',
    flexDirection: 'row',
  },
  rightContainer: {
    flexDirection: 'row',
    paddingRight: hp(2),
  },
  image: {
    height: '100%',
    width: wp(20),
    resizeMode: 'contain',
  },
  productInfo: {
    marginLeft: hp(1),
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  price: {
    fontSize: hp(1.6),
  },
  confirmBtn: {
    backgroundColor: '#ff8800',
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.5),
    borderRadius: hp(2),
  },
  confirmText: {
    fontSize: hp(1.6),
    color: '#fff',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
