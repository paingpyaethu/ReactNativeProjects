import axios from 'axios';
import {authHeader} from '../../utils/Generator';
import {BASE_URL} from '../api_endpoint';
import {getToken} from '../redux/Store';

const AuthRequest = axios.create({
  baseURL: BASE_URL,
});
const getRestaurants = async () => {
  console.log('RestaurantService | getRestaurantsData');
  try {
    const response = await AuthRequest.get('/restaurant', {
      headers: authHeader(getToken()),
    });
    if (response?.status === 200) {
      return {
        status: true,
        message: 'Restaurants data fetched',
        data: response?.data,
      };
    } else {
      return {
        status: false,
        message: 'Restaurants data not found',
      };
    }
  } catch (error) {
    return {
      status: false,
      message: 'Restaurants data not found',
    };
  }
};

export default {getRestaurants};
