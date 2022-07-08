import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    marginTop: hp(10),
    marginLeft: wp(10),
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
    marginTop: hp(5),
    backgroundColor: '#fafaf6',
    borderRadius: hp(1),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  checkBoxText: {
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  buttonContainer: {
    borderWidth: 1,
    backgroundColor: '#7a57d1',
    borderColor: '#000',
    width: wp(20),
    paddingVertical: hp(1),
    marginTop: hp(5),
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
