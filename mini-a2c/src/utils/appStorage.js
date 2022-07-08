import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const appStorage = {
  setItem: (key, value) => {
    try {
      storage.set(key, value);
    } catch (error) {
      console.log('error', error);
    }
  },

  getItem: key => {
    try {
      return storage.getString(key);
    } catch (error) {
      console.log('error', error);
    }
  },

  removeItem: key => {
    try {
      storage.delete(key);
    } catch (error) {
      console.log('error', error);
    }
  },
};
