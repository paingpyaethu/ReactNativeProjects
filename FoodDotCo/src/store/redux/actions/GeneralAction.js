import {_getNewUser, _getToken} from '../../../utils/appStorage';
import {refreshToken} from '../../services/AuthenticationService';
import UserService from '../../services/UserService';
import {IS_NEW_USER, SET_TOKEN, SET_USER_DATA} from '../Type';

export const setToken = token => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const setIsNewUser = () => {
  return {
    type: IS_NEW_USER,
    payload: false,
  };
};

export const appStart = () => {
  return (dispatch, getState) => {
    _getNewUser().then(isNewUser => {
      dispatch({
        type: IS_NEW_USER,
        payload: isNewUser ? false : true,
      });
    });
    _getToken().then(token => {
      if (token) {
        dispatch({
          type: SET_TOKEN,
          payload: token,
        });
        UserService.getUser().then(response => {
          if (response?.status) {
            dispatch({
              type: SET_USER_DATA,
              payload: response?.data,
            });
          } else if (response?.error?.message === 'TokenExpiredError') {
            refreshToken().then(tokenRes => {
              if (tokenRes?.status) {
                dispatch({
                  type: SET_TOKEN,
                  payload: tokenRes?.data,
                });
                UserService.getUser().then(res => {
                  if (res?.status) {
                    dispatch({
                      type: SET_USER_DATA,
                      payload: response?.data,
                    });
                  }
                });
              } else {
                dispatch({
                  type: SET_TOKEN,
                  payload: '',
                });
              }
            });
          }
        });
      }
    });
  };
};
