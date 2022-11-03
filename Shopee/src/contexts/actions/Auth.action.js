// import jwt_decode from 'jwt-decode';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-toast-message';

// import {BASE_URL} from '../../store/api_endpoint';
// import {METRICS} from '../../theme';

// export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// export const loginUser = (user, dispatch) => {
//   fetch(`${BASE_URL}/users/login`, {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   })
//     .then(res => res.json())
//     .then(data => {
//       if (data) {
//         const token = data.token;
//         AsyncStorage.setItem('jwt', token);
//         const decoded = jwt_decode(token);
//         dispatch(setCurrentUser(decoded, user));
//       } else {
//         logoutUser(dispatch);
//       }
//     })
//     .catch(() => {
//       Toast.show({
//         topOffset: METRICS._scale(60),
//         type: 'error',
//         text1: 'Please provide correct credentials',
//         text2: '',
//       });
//       logoutUser(dispatch);
//     });
// };

// export const getUserProfile = id => {
//   fetch(`${BASE_URL}/users/${id}`, {
//     method: 'POST',
//     body: JSON.stringify(id),
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     });
// };

// export const logoutUser = dispatch => {
//   AsyncStorage.removeItem('jwt');
//   dispatch(setCurrentUser({}));
// };

// export const setCurrentUser = (decoded, user) => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded,
//     userProfile: user,
//   };
// };
