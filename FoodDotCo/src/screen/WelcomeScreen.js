import React, {useState, useRef} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import Pagination from '../components/molecules/Pagination';
import Separator from '../components/atoms/Separator';
import WelcomeCard from '../components/organisms/WelcomeCard';
import {useOrientation} from '../hooks/useOrientation';
import General from '../store/constants/General';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import Metrics from '../theme/Metrics';
import SkipNextButton from '../components/molecules/WelcomeButtons/SkipNextButton';
import CustomButton from '../components/molecules/WelcomeButtons/CustomButton';
import {_setNewUser} from '../utils/appStorage';
import {useDispatch} from 'react-redux';
import {setIsNewUser} from '../store/redux/actions/GeneralAction';

const WelcomeScreen = props => {
  const dispatch = useDispatch();
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeListRef = useRef();

  const onViewRef = useRef(({changed}) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pageScroll = () => {
    welcomeListRef.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  const navigate = () => {
    _setNewUser().then(() => {
      dispatch(setIsNewUser());
    });
  };
  const orientation = useOrientation();
  const styles = customStyle(orientation);

  const renderItem = ({item}) => {
    return <WelcomeCard {...item} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      {/* <Separator height={StatusBar.currentHeight} /> */}
      <Separator height={(orientation.height / 100) * 8} />

      <View style={styles.welcomeListContainer}>
        <FlashList
          ref={welcomeListRef}
          estimatedItemSize={409}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          data={General.WELCOME_CONTENTS}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>
      <Separator height={(orientation.height / 100) * 5} />
      {/******************* Pagination Style ********************/}
      <Pagination index={welcomeListIndex} />
      <Separator height={(orientation.height / 100) * 8} />

      {welcomeListIndex === 2 ? (
        <CustomButton
          onPress={() => navigate()}
          btn={styles.btn}
          btnTextDesign={styles.btnText}
          btnText="Get Started"
        />
      ) : (
        <SkipNextButton
          onPressSkip={() => welcomeListRef.current.scrollToEnd()}
          onPressNext={() => pageScroll()}
        />
      )}
    </View>
  );
};

const customStyle = orientation =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.DEFAULT_WHITE,
    },
    welcomeListContainer: {
      height: (orientation.height / 100) * 60,
    },
    btn: {
      backgroundColor: Colors.PRIMARY_COLOR,
      paddingVertical: Metrics._scale(5),
      paddingHorizontal: Metrics._scale(30),
      borderRadius: Metrics._scale(8),

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    btnText: {
      fontSize: Metrics._scale(20),
      fontFamily: Fonts.POPPINS_MEDIUM,
      color: Colors.DEFAULT_WHITE,
      lineHeight: Metrics._scale(20 * 1.4),
    },
  });
export default WelcomeScreen;
