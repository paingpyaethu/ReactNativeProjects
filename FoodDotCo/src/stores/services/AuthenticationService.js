import axios from 'axios';
import {BASE_URL} from '../api_endpoint';

const AuthRequest = axios.create({
  baseURL: BASE_URL,
});
const userReg = async req => {
  if (!req?.username || !req?.email || !req?.password) {
    return {status: false, message: 'Please fill up all the fields.'};
  }
  try {
    const user = {
      username: req?.username,
      email: req?.email,
      password: req?.password,
    };
    const response = await AuthRequest.post('/register', user);
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Opps! Something went wrong'};
  }
};

const userLogin = async req => {
  if (!req?.username || !req?.password) {
    return {status: false, message: 'Please fill up all the fields.'};
  }
  try {
    const user = {
      username: req?.username,
      password: req?.password,
    };
    const response = await AuthRequest.post('/login', user);
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Opps! Something went wrong'};
  }
};

const checkUser = async (type, val) => {
  try {
    let params = {[type]: val};

    const userCheckResponse = await AuthRequest.get('/user-exist', {params});
    console.log(userCheckResponse?.data);
    return userCheckResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Opps! Something went wrong'};
  }
};

export {userReg, userLogin, checkUser};
