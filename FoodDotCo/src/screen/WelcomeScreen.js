import React, {useState, useRef} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import Pagination from '../components/molecules/Pagination';
import Separator from '../components/atoms/Separator';
import WelcomeCard from '../components/organisms/WelcomeCard';
import {useOrientation} from '../hooks/useOrientation';
import General from '../stores/constants/General';
import Colors from '../theme/Colors';
import Fonts from '../theme/Fonts';
import Metrics from '../theme/Metrics';
import SkipNextButton from '../components/molecules/WelcomeButtons/SkipNextButton';
import GetStartedButton from '../components/molecules/WelcomeButtons/GetStartedButton';

const WelcomeScreen = () => {
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
        <GetStartedButton />
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
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: (orientation.width / 100) * 90,
    },
    btnText: {
      fontSize: Metrics._scale(16),
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      lineHeight: Metrics._scale(60),
      textAlign: 'center',
    },
    nextBtn: {
      backgroundColor: Colors.LIGHT_GREEN,
      borderRadius: Metrics._scale(50),
      width: Metrics._scale(60),
      height: Metrics._scale(60),
    },
  });
export default WelcomeScreen;
