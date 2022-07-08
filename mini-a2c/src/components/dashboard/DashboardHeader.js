import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// Style
import styles from './style';

const DashboardHeader = props => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        {/* user profile */}

        <Image
          source={require('@assets/images/profile.png')}
          style={styles.profile}
        />

        {/* user information */}

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{props.data.userName}</Text>
          <Text style={styles.userEmail}>{props.data.userEmail}</Text>
        </View>
      </View>

      {/* logout */}

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={props.logout} style={styles.logoutBtn}>
          <Text style={{color: '#ff8800'}}>{props.logoutTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardHeader;
