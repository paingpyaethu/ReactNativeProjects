import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/molecules/Form/CustomButton';
import CustomInput from '../../components/molecules/Form/CustomInput';
import {FONTS, METRICS} from '../../theme';

const ProductFormScreen = ({route, navigation}) => {
  const [pickerValue, setPickerValue] = useState();
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [mainImage, setMainImage] = useState();
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState();
  const [err, setErr] = useState();
  const [countInStock, setCountInStock] = useState();
  const [rating, setrating] = useState();
  const [isFeatured, setIsFeatured] = useState(false);
  const [richDescription, setRichDescription] = useState();
  const [numReviews, setNumReviews] = useState(0);
  const [item, setItem] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const handleSubmit = () => {};

  return (
    <>
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        enableOnAndroid={true}
        style={styles.container}>
        <Text style={styles.title}>Add Product</Text>
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
});
