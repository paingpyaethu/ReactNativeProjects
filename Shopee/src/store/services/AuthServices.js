import * as Keychain from 'react-native-keychain';
import {METRICS} from '../../theme';
import {
  fetch_auth_error,
  fetch_auth_login,
  fetch_auth_logout,
  fetch_auth_register,
  fetch_auth_req,
  fetch_auth_success,
} from '../redux/actions/AuthAction';
import Toast from 'react-native-toast-message';

export const loadJWT = () => {
  return async dispatch => {
    try {
      const credentials = await Keychain.getGenericPassword();

      if (!credentials) {
        return;
      }
      const jwt = JSON.parse(credentials.password);

      const user = jwt.userInfo;
      const accessToken = jwt.token;
      const authenticated = jwt.isAuthenticated;

      // console.log('Keychain Password::: ', jwt);

      dispatch(fetch_auth_success(user, accessToken, authenticated));
    } catch (error) {
      dispatch(fetch_auth_error());
    }
  };
};
export const registerUser = (data, publicAxios, navigation) => {
  return dispatch => {
    dispatch(fetch_auth_req());

    publicAxios
      .post('/users/register', data)
      .then(res => {
        if (res.status === 200) {
          const regInfo = res.data.data;
          dispatch(fetch_auth_register(regInfo));
          console.log(regInfo);
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            text2: 'Please login your account',
            visibilityTime: 3000,
          });
          setTimeout(() => {
            navigation.navigate('Login');
          }, 500);
        }
      })
      .catch(e => {
        dispatch(fetch_auth_error(e.message));

        Toast.show({
          type: 'error',
          text1: e.message,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};
export const login = (data, publicAxios) => {
  return dispatch => {
    dispatch(fetch_auth_req());

    publicAxios
      .post('/users/login', data)
      .then(res => {
        if (res.status === 200) {
          const userInfo = res.data;
          const _token = res.data.token;
          Keychain.setGenericPassword(
            'token',
            JSON.stringify({
              token: _token,
              isAuthenticated: true,
              userInfo: userInfo,
            }),
          );
          // console.log('Login Data::: ', userInfo);
          dispatch(fetch_auth_login(userInfo, _token));
          Toast.show({
            topOffset: METRICS._scale(60),
            type: 'success',
            text1: res.data.message,
            visibilityTime: 3000,
          });
        }
      })
      .catch(e => {
        let errMsg = e.response.data.message;
        dispatch(fetch_auth_error(errMsg));
        Toast.show({
          type: 'error',
          text1: errMsg,
          position: 'bottom',
          visibilityTime: 3000,
        });
      });
  };
};
// export const login = (data, publicAxios) => {
//   return async dispatch => {
//     dispatch(fetch_auth_req());

//     let res = await publicAxios
//       .post('/users/login', data)
//       .catch(error => error.message);

//     if (res.status === 200) {
//       const userInfo = res.data;
//       const _token = res.data.token;
//       await Keychain.setGenericPassword(
//         'token',
//         JSON.stringify({
//           token: _token,
//           isAuthenticated: true,
//           userInfo: userInfo,
//         }),
//       );
//       // console.log('Login Data::: ', userInfo);
//       dispatch(fetch_auth_login(userInfo, _token));
//       Toast.show({
//         topOffset: METRICS._scale(60),
//         type: 'success',
//         text1: res.data.message,
//         visibilityTime: 3000,
//       });
//     } else if (res.status === 400) {
//       console.log(res.status);
//       dispatch(fetch_auth_error(res));

//       Toast.show({
//         type: 'error',
//         text1: res,
//         position: 'bottom',
//         visibilityTime: 3000,
//       });
//     }
//   };
// };

export const logout = () => {
  return async dispatch => {
    dispatch(fetch_auth_req());

    await Keychain.resetGenericPassword();

    setTimeout(() => {
      dispatch(fetch_auth_logout());
    }, 500);
  };
};
