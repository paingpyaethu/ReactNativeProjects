import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  dashboardContainer: {
    height: hp('100%'),
    alignItems: 'center',
    backgroundColor: '#0d0c0c',
  },
  cardContainer: {
    // marginHorizontal: wp(15),
    // marginVertical: hp(20),
    // paddingHorizonal: wp(40),
    // paddingBottom: wp(25),
    width: wp('60%'),
    height: hp('25%'),
    marginTop: hp(5),
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: '#ddd',
  },
  elevation: {
    elevation: 0.1,
    shadowColor: '#7a57d1',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: hp(5),
  },
  textUser: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bababa',
  },
  textEmail: {
    marginTop: hp(5),
    fontWeight: 'bold',
    color: '#7a57d1',
  },

  buttonContainer: {
    borderWidth: 1,
    backgroundColor: '#d72323',
    borderColor: '#000',
    width: wp(20),
    paddingVertical: hp(1),
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(1),
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default styles;
