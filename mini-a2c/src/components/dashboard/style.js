import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  headerContainer: {
    width: wp(100),
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp(2),
  },
  leftContainer: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
  },
  rightContainer: {
    // backgroundColor: '#ff8899',
    justifyContent: 'center',
  },
  userInfo: {
    // backgroundColor: '#ff8800',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: hp(3),
  },
  profile: {
    width: hp(10),
    height: hp(10),
  },
  userName: {
    color: '#000',
    fontSize: hp(2),
  },
  userEmail: {
    fontSize: hp(1.8),
  },
  logoutBtn: {
    // backgroundColor: '#ff8800',
  },
});

export default styles;
