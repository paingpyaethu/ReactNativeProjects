import axios from 'axios';
import {authHeader} from '../../utils/Generator';
import {BASE_URL} from '../api_endpoint';
import {getToken} from '../redux/Store';

const AuthRequest = axios.create({
  baseURL: BASE_URL,
});
const getUser = async () => {
  console.log('UserService | getUserData');
  try {
    const response = await AuthRequest.get('/user/get-user', {
      headers: authHeader(getToken()),
    });
    if (response?.status === 200) {
      return {
        status: true,
        message: 'User data fetched',
        data: response?.data,
      };
    } else {
      return {
        status: false,
        message: 'User data not found',
      };
    }
  } catch (error) {
    return {
      status: false,
      message: 'User data not found',
    };
  }
};

export default {getUser};
