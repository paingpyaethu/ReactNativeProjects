import AsyncStorage from '@react-native-async-storage/async-storage';

export const _setNewUser = async () => {
  try {
    return await AsyncStorage.setItem('isNewUser', 'true');
  } catch (error) {
    console.log(error);
  }
};

export const _getNewUser = async () => {
  try {
    return await AsyncStorage.getItem('isNewUser');
  } catch (error) {
    console.log(error);
  }
};

export const _setToken = async token => {
  try {
    return await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
};

export const _getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (error) {
    console.log(error);
  }
};
