import axios from '../utils/axios';

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
        if (response.data.user) {
          setToken('JWT');
          resolve(response.data.user);
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
        if (response.data.user) {
          setToken('JWT');
          resolve(response.data.user);
        } else {
          resolve(response.data.error);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
