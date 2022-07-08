import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';

export const appStorage = {
  setUserData: (key, value) => {
    RNSecureKeyStore.set(key, value, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
  },

  getUserData: key => {
    let userData = RNSecureKeyStore.get(key);
    return userData;
  },

  getRemoveUserData: key => {
    let removeUserData = RNSecureKeyStore.remove(key);
    return removeUserData;
  },
};
