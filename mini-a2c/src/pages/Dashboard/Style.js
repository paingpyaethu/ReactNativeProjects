import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontFamily: 'LeagueGothicr',
  },
  titleOne: {
    fontSize: 20,
    fontFamily: 'Smooch-Regular',
  },
  productListContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: hp(1),
    width: wp(100),
  },
  productContainer: {
    backgroundColor: '#fff',
    width: wp(45),
    height: hp(15),
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: hp(0.5),
    elevation: 3,
  },
  imageContainer: {
    width: wp(40),
    height: hp(10),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  footerContainer: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: hp(1),
  },
  titleContainer: {
    // backgroundColor: 'red',
  },
  productTitle: {
    fontSize: hp(1.7),
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: hp(1.3),
  },
  addtoCart: {
    fontSize: hp(1.3),
    color: '#fff',
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: hp(1),
    elevation: 3,
  },
  addtoCartBtn: {
    backgroundColor: '#ff8800',
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(0.3),
    borderRadius: hp(5),
  },
});

export default styles;
