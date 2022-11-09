import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {AxiosContext} from '../../../../../contexts/AxiosContext';
import {deleteProduct} from '../../../../../store/services/ProductServices';
import {COLORS, FONTS, METRICS} from '../../../../../theme';
import ModalButton from '../../../../atoms/ModalButton';

const ListItem = ({product, index, navigation}) => {
  const authContext = useContext(AxiosContext);
  const {authAxios} = authContext;

  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  const _onEdit = () => {
    navigation.navigate('Admin Product Form', {productData: product});
    setModalVisible(false);
  };

  const _onDelete = id => {
    Alert.alert(
      'သတိပေးချက် !',
      'ရွေးချယ်ထားသော အချက်အလက်အားပယ်ဖျက်လိုပါသလား ?',
      [
        {
          text: 'ထွက်မည်။',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'အတည်ပြုသည်။',
          onPress: () => dispatch(deleteProduct(id, authAxios)),
        },
      ],
    );
  };

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.buttonClose}>
              <IonIcons name="close" size={METRICS._scale(20)} />
            </TouchableOpacity>

            <ModalButton
              iconName={'edit'}
              btnText={'Edit'}
              bgColor={COLORS.FOCUS_COLOR}
              onPress={_onEdit}
            />
            <ModalButton
              iconName={'delete'}
              btnText={'Delete'}
              bgColor={COLORS.DEFAULT_RED}
              onPress={() => _onDelete(product.id)}
            />
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AdminProductDetail', {
            productDetail: product,
          })
        }
        onLongPress={() => setModalVisible(true)}
        style={[
          styles.container,
          {
            backgroundColor: index % 2 === 0 ? COLORS.WHITE : COLORS.GAINSBORO,
          },
        ]}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: product.image
              ? product.image
              : 'https://www.pngkey.com/png/full/110-1102882_black-box-outline-open-card-white-cartoon-empty.png',
          }}
        />
        <Text style={styles.item}>{product.brand}</Text>
        <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
          {product.name}
        </Text>
        <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
          {product.category.name}
        </Text>
        <Text style={styles.item}>$ {product.price}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: METRICS._scale(6),
    width: METRICS.width,
  },
  image: {
    width:
      METRICS.width >= 768
        ? METRICS.width / METRICS._scale(2.5)
        : METRICS.width / METRICS._scale(5),
    height: METRICS._scale(35),
  },
  item: {
    flexWrap: 'nowrap',
    width:
      METRICS.width >= 768
        ? METRICS.width / METRICS._scale(2.5)
        : METRICS.width / METRICS._scale(5),

    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: METRICS._scale(12),
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: METRICS._scale(22),
  },
  modalView: {
    margin: METRICS._scale(20),
    backgroundColor: 'white',
    borderRadius: METRICS._scale(15),
    padding: METRICS._scale(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    position: 'absolute',
    top: METRICS._scale(6),
    right: METRICS._scale(10),

    alignSelf: 'flex-end',
  },
});
