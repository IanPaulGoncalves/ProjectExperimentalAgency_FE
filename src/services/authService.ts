import axios from '../utils/axios';
import { getUserValidation } from './registerUserService';

export function setToken(token: any) {
  localStorage.setItem('accessToken', token);
}

export function getToken() {
  return localStorage.getItem('accessToken');
}

export function isAuthenticated() {
  return !!getToken();
}

export function resetLogin() {
  localStorage.setItem('accessToken', '');
  window.location.reload();
}

export function loginAuth(email: string, password: string) {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/home/login', { email, password })
      .then(response => {
        if (response.data.getUser) {
          setToken('JWT');
          resolve(response.data.getUser);
        } else {
          resolve(response.data.error);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function loginAuthToken() {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/home/me')
      .then(response => {
        if (response.data.getUserAuth) {
          setToken('JWT');
          resolve(response.data.getUserAuth);
        } else {
          resolve(response.data.error);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
