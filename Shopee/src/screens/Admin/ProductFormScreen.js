/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SelectDropdown from 'react-native-select-dropdown';
import IonIcons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../../components/molecules/Form/CustomButton';
import CustomInput from '../../components/molecules/Form/CustomInput';

import {useDispatch, useSelector} from 'react-redux';

import {AxiosContext} from '../../contexts/AxiosContext';
import {getAllCategories} from '../../store/services/CategoryServices';
import {COLORS, FONTS, METRICS} from '../../theme';

const ProductFormScreen = ({route, navigation}) => {
  const authContext = useContext(AxiosContext);
  const {authAxios} = authContext;

  const categories = useSelector(state => state.categories.category);

  let categoryNameList = [];
  categories &&
    categories.map(category => {
      categoryNameList.push(category.name);
    });
  const dispatch = useDispatch();

  const [pickerValue, setPickerValue] = useState();
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [mainImage, setMainImage] = useState();
  const [category, setCategory] = useState();
  const [token, setToken] = useState();
  const [err, setErr] = useState();
  const [countInStock, setCountInStock] = useState();
  const [rating, setrating] = useState();
  const [isFeatured, setIsFeatured] = useState(false);
  const [richDescription, setRichDescription] = useState();
  const [numReviews, setNumReviews] = useState(0);
  // const [item, setItem] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(getAllCategories(authAxios));
    }
    return () => {
      mounted = false;
    };
  }, [authAxios, dispatch]);

  const handleSubmit = () => {};

  return (
    <>
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        enableOnAndroid={true}
        style={styles.container}>
        <Text style={styles.title}>Add Product</Text>

        <View style={{alignItems: 'center', marginTop: METRICS._scale(8)}}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} />
            <TouchableOpacity style={styles.imagePicker}>
              <IonIcons name="camera-outline" size={METRICS._scale(13)} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subContainer}>
          <CustomInput
            label={'Brand'}
            name={'brand'}
            value={brand}
            onChangeText={text => {
              setBrand(text);
            }}
            placeholder={'Brand'}
          />
          <CustomInput
            label={'Name'}
            name={'name'}
            value={name}
            onChangeText={text => setName(text)}
            // onFocus={() => customValidator(password, setPwdErrMsg(null))}
            placeholder={'Name'}
            // error={pwdErrMsg}
          />
          <CustomInput
            label={'Price'}
            name={'price'}
            value={price}
            onChangeText={text => setPrice(text)}
            // onFocus={() => customValidator(password, setPwdErrMsg(null))}
            placeholder={'Price'}
            // error={pwdErrMsg}
          />
          <CustomInput
            label={'Count In Stock'}
            name={'countInStock'}
            value={countInStock}
            onChangeText={text => setCountInStock(text)}
            // onFocus={() => customValidator(password, setPwdErrMsg(null))}
            placeholder={'Count In Stock'}
            // error={pwdErrMsg}
          />
          <CustomInput
            label={'Description'}
            name={'description'}
            value={description}
            onChangeText={text => setDescription(text)}
            // onFocus={() => customValidator(password, setPwdErrMsg(null))}
            placeholder={'Description'}
            // error={pwdErrMsg}
          />

          <SelectDropdown
            data={categoryNameList}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Select categories'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <IonIcons
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#444'}
                  size={METRICS._scale(18)}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
            selectedRowStyle={styles.dropdownSelectedRowStyle}
          />
          <CustomButton btnText={'Add'} onSubmit={() => handleSubmit()} />
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default ProductFormScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: METRICS._scale(30),
    paddingHorizontal: METRICS._scale(20),
  },
  title: {
    fontSize: METRICS._scale(30),
    lineHeight: METRICS._scale(30 * 1.4),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
    textAlign: 'center',
  },
  subContainer: {
    marginVertical: METRICS._scale(20),
  },

  imageContainer: {
    width: METRICS._scale(200),
    height: METRICS._scale(200),
    borderWidth: METRICS._scale(3),
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: METRICS._scale(100),
    borderColor: COLORS.DEFAULT_GREY,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: METRICS._scale(100),
  },

  imagePicker: {
    position: 'absolute',
    right: METRICS._scale(5),
    bottom: METRICS._scale(5),
    backgroundColor: COLORS.NORMAL_GREY,
    padding: METRICS._scale(8),
    borderRadius: METRICS._scale(100),
  },

  dropdownBtnStyle: {
    width: '100%',
    height: METRICS._scale(48),
    backgroundColor: '#FFF',
    borderRadius: METRICS._scale(8),
    borderWidth: METRICS._scale(2),
    borderColor: COLORS.NORMAL_GREY,
    marginVertical: METRICS._scale(15),
  },
  dropdownBtnTxtStyle: {
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: METRICS._scale(13),
    lineHeight: METRICS._scale(13 * 1.4),
  },
  dropdownStyle: {
    backgroundColor: COLORS.NORMAL_GREY,
    borderRadius: METRICS._scale(5),
  },
  dropdownRowStyle: {
    backgroundColor: COLORS.LIGHT_GREY,
    borderBottomColor: COLORS.DEFAULT_GREY,
    height: METRICS._scale(40),
  },
  dropdownRowTxtStyle: {
    color: '#444',
    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(40),
  },
  dropdownSelectedRowStyle: {backgroundColor: COLORS.GAINSBORO},
});
