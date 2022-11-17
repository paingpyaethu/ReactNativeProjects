import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS, METRICS} from '../../themes';

const ProductDetailScreen = ({route, navigation}) => {
  const {item} = route.params;

  const [click, setClick] = useState(false);

  return (
    <>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcons name="arrow-back" size={METRICS._scale(25)} />
          </TouchableOpacity>
          {click ? (
            <TouchableOpacity onPress={() => setClick(!click)}>
              <IonIcons
                name="heart"
                size={METRICS._scale(25)}
                color={COLORS.DEFAULT_RED}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setClick(!click)}>
              <IonIcons
                name="heart-outline"
                size={METRICS._scale(25)}
                color={COLORS.SECONDARY_COLOR}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>

      <KeyboardAwareScrollView
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.bodyHeader}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.offerPrice}>
              {item.offerPrice && item.offerPrice.length > 0
                ? '$' + item.offerPrice
                : null}
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <View style={styles.description}>
              <Text style={styles.descriptionTxt}>{item.description}</Text>
            </View>

            {item.Stock !== 0 ? (
              <View style={styles.quantityContainer}>
                <View style={styles.quantity}>
                  <TouchableOpacity style={styles.quantityBox}>
                    <IonIcons
                      name="remove-circle"
                      size={METRICS.height / 40}
                      color={COLORS.LIGHT_GREY}
                    />
                  </TouchableOpacity>

                  <Text style={styles.quantityTxt}>1</Text>

                  <TouchableOpacity style={styles.quantityBox}>
                    <IonIcons
                      name="add-circle"
                      size={METRICS.height / 40}
                      color={COLORS.LIGHT_GREY}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.addToCart}>
                  <IonIcons
                    name="cart-outline"
                    size={METRICS.height / 40}
                    color={'#fff'}
                  />
                  <Text style={styles.addToCartTxt}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            ) : null}

            <View style={styles.review}>
              <Text style={styles.reviewHeaderTxt}>Reviews</Text>
              {item.reviews.length === 0 ? (
                <Text style={styles.noReviewTxt}>- No Reviews have yet -</Text>
              ) : (
                <>
                  {item.reviews.map(i => (
                    <View key={i._id} style={styles.reviewTxtContainer}>
                      <Text style={styles.reviewName}>{i.name}</Text>
                      <Text style={styles.reviewName}> - </Text>
                      <Text style={styles.reviewComment}>{i.comment}</Text>
                      <IonIcons
                        name="star"
                        color={COLORS.DEFAULT_YELLOW}
                        style={styles.ratingIcon}
                      />
                      <Text style={styles.reviewRating}>({i.rating})</Text>
                    </View>
                  ))}
                </>
              )}
            </View>
            <View style={styles.yourRating}>
              <Text style={styles.yourRatingTxt}>Your Ratings*</Text>
              <IonIcons
                name="star-outline"
                color={COLORS.DEFAULT_YELLOW}
                style={styles.ratingIcon}
              />
              <IonIcons
                name="star-outline"
                color={COLORS.DEFAULT_YELLOW}
                style={styles.ratingIcon}
              />
              <IonIcons
                name="star-outline"
                color={COLORS.DEFAULT_YELLOW}
                style={styles.ratingIcon}
              />
              <IonIcons
                name="star-outline"
                color={COLORS.DEFAULT_YELLOW}
                style={styles.ratingIcon}
              />
              <IonIcons
                name="star-outline"
                color={COLORS.DEFAULT_YELLOW}
                style={styles.ratingIcon}
              />
            </View>
            <View style={styles.addComment}>
              <TextInput
                placeholder="Add your comment..."
                placeholderTextColor="#333"
                textAlignVertical="top"
                multiline={true}
                style={styles.input}
              />
              <TouchableOpacity style={styles.submit}>
                <Text style={styles.submitTxt}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: METRICS.height,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    padding: METRICS._scale(10),
    height: METRICS.width >= 768 ? METRICS.height / 10 : METRICS.height / 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: METRICS.height / 5,
    height: METRICS.height / 5,
    margin: METRICS._scale(10),
  },

  bodyContainer: {
    backgroundColor: COLORS.LIGHT_GREY,
    paddingTop: METRICS._scale(10),
    paddingBottom:
      METRICS.width >= 768 ? METRICS._scale(20) : METRICS._scale(80),
    marginHorizontal: METRICS._scale(5),
    borderTopStartRadius: METRICS._scale(10),
    borderTopEndRadius: METRICS._scale(10),
  },
  bodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: METRICS._scale(10),
  },
  name: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 45,
  },
  offerPrice: {
    position: 'absolute',
    right: METRICS._scale(60),
    bottom: METRICS._scale(20),

    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 45,
    color: COLORS.DEFAULT_RED,

    textDecorationLine: 'line-through',
  },
  priceContainer: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    borderTopLeftRadius: METRICS._scale(20),
    borderBottomLeftRadius: METRICS._scale(20),

    padding: METRICS._scale(10),
  },
  price: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 50,
    letterSpacing: METRICS._scale(1),

    color: '#fff',
  },

  subContainer: {
    marginHorizontal: METRICS._scale(10),
  },
  description: {
    marginVertical: METRICS._scale(10),
  },
  descriptionTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 60,
    color: COLORS.SECONDARY_COLOR,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: METRICS._scale(10),
  },
  quantityBox: {
    backgroundColor: COLORS.FOCUS_COLOR,

    borderRadius: METRICS._scale(10),
    padding: METRICS._scale(8),
  },
  quantityTxt: {
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,
    fontSize: METRICS.height / 50,
    marginHorizontal: METRICS._scale(10),
    color: COLORS.SECONDARY_COLOR,
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: COLORS.DEFAULT_GREEN,
    padding: METRICS._scale(8),
    borderRadius: METRICS._scale(8),
  },
  addToCartTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 50,
    lineHeight: METRICS._scale(15 * 1.4),

    marginLeft: METRICS._scale(8),
    color: '#fff',
  },

  review: {
    marginBottom: METRICS._scale(10),
  },
  reviewHeaderTxt: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 45,
  },
  noReviewTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 60,
  },
  reviewTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewName: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 50,
  },
  reviewComment: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 50,

    color: COLORS.FOCUS_COLOR,
    marginRight: METRICS._scale(10),
  },
  ratingIcon: {
    fontSize: METRICS.height / 50,
    marginRight: METRICS._scale(3),
  },
  reviewRating: {
    fontFamily: FONTS.ROBOTOSLAB_MEDIUM,
    fontSize: METRICS.height / 50,
    lineHeight: METRICS._scale(15 * 1.4),
  },

  yourRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: METRICS._scale(10),
  },
  yourRatingTxt: {
    fontFamily: FONTS.ROBOTOSLAB_SEMI_BOLD,

    fontSize: METRICS.height / 50,
    marginRight: METRICS._scale(6),
  },

  input: {
    height: METRICS._scale(100),
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 60,

    borderWidth: METRICS._scale(1),
    paddingHorizontal: METRICS._scale(10),
    color: COLORS.SECONDARY_COLOR,
    borderRadius: 5,
    borderColor: '#0000002b',
  },

  submit: {
    backgroundColor: COLORS.DEFAULT_GREEN,
    padding: METRICS._scale(8),
    borderRadius: METRICS._scale(8),

    width: METRICS.width / 2,
    marginTop: METRICS._scale(10),
  },
  submitTxt: {
    fontFamily: FONTS.ROBOTOSLAB_REGULAR,
    fontSize: METRICS.height / 50,
    lineHeight: METRICS._scale(15 * 1.4),

    color: '#fff',
    textAlign: 'center',
  },
});
