import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    alignItems: 'center',
    marginTop: hp(10),
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7a57d1',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: wp(70),
    paddingHorizontal: hp(2),
    paddingVertical: hp(1),
    backgroundColor: '#fafaf6',
    borderRadius: hp(1),
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#7a57d1',
    marginTop: hp(5),
    width: wp(21),
    paddingVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(1),
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  authToogleContainer: {
    flexDirection: 'row',
    marginTop: hp(3),
  },
  authText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  copyRightContainer: {
    flexDirection: 'row',
    marginTop: hp(33),
  },
  copyRight: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
