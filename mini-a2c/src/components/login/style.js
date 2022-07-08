import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// const widht = Dimensions.get('window').width
// const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(8),
  },
  title: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#ff8899',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('1%'),
    borderRadius: hp(1),
    marginTop: hp(1),
  },
  inputContainer: {
    width: wp(100),
    alignItems: 'center',
    marginTop: hp(5),
  },
  input: {
    backgroundColor: '#ddd',
    width: wp(70),
    paddingHorizontal: hp(2),
    paddingVertical: hp(1),
    borderRadius: hp(1),
    margin: 0,
  },
  buttonContainer: {
    marginTop: hp(3),
    backgroundColor: '#000',
    width: wp(70),
    paddingVertical: hp(1.8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(0.5),
  },
  buttonText: {
    color: '#fff',
  },
  accContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  footerText: {
    color: 'red',
  },
});

export default styles;
