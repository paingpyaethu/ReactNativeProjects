import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AxiosContext} from '../../contexts/AxiosContext';

// Context
import {BASE_URL} from '../../store/api_endpoint';
import {logout} from '../../store/services/AuthServices';
import {FONTS, METRICS} from '../../theme';

const ProfileScreen = props => {
  const authContext = useContext(AxiosContext);
  const {authAxios} = authContext;

  const auth = useSelector(state => state.auth);

  const [userProfile, setUserProfile] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;
    authAxios
      .get(`${BASE_URL}/users/${auth.user.id}`)
      .then(res => {
        if (mounted) {
          setUserProfile(res.data);
        }
      })
      .catch(err => console.log(err));

    return () => {
      mounted = false;
    };
  }, [auth, auth.user.id, authAxios]);

  const signout = () => {
    dispatch(logout());
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.userName}>{userProfile ? userProfile.name : ''}</Text>
      <View>
        <Text style={styles.userData}>
          {userProfile ? userProfile.email : ''}
        </Text>
        <Text style={styles.userData}>
          {userProfile ? userProfile.phone : ''}
        </Text>
      </View>
      <TouchableOpacity onPress={signout} style={styles.logoutBtn}>
        <Text style={styles.logoutText}>LogOut</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: METRICS._scale(60),
    alignItems: 'center',
  },
  userName: {
    fontSize: METRICS._scale(18),
    lineHeight: METRICS._scale(18 * 1.4),
    fontFamily: FONTS.MONTSERRAT_BOLD,

    marginBottom: METRICS._scale(18),
  },
  userData: {
    fontSize: METRICS._scale(14),
    lineHeight: METRICS._scale(14 * 1.4),
    fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
  },
  logoutBtn: {
    marginTop: METRICS._scale(20),
    justifyContent: 'center',
    backgroundColor: '#cb3b3b',
    height: METRICS._scale(34),
    paddingHorizontal: METRICS._scale(17),

    borderRadius: METRICS._scale(8),
  },
  logoutText: {
    color: '#fff',

    fontFamily: FONTS.MONTSERRAT_MEDIUM,
    fontSize: METRICS._scale(13),
    lineHeight: METRICS._scale(13 * 1.4),
  },
});
