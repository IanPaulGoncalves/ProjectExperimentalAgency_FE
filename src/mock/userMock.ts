import mock from '../utils/mock';
import { getUserValidation } from '../services/registerUserService';
import {
  initialTickets,
  getTicket,
  getSearchTicket
} from '../services/ticketService';

let user: any;
const userAuth: any = localStorage.getItem('userAuth');
const getUserAuth: any = JSON.parse(userAuth);

initialTickets();

mock.onPost('/api/home/me').reply(200, {
  getUserAuth
});

mock.onGet('/api/home/tikets').reply(config => {
  const getTickets = getTicket();
  if (!getTickets) {
    return [400, { message: 'Não foi possível encontrar passagens' }];
  }

  return [200, { getTickets }];
});

mock.onPost('/api/home/searchticket').reply(config => {
  const { startCity, endCity } = JSON.parse(config.data);
  const getTickets = getSearchTicket(startCity, endCity);
  if (!getTickets) {
    return [400, { message: 'Não foi possível encontrar passagens' }];
  }

  return [200, { getTickets }];
});

mock.onPost('/api/home/login').reply(config => {
  const { email, password } = JSON.parse(config.data);

  const getUser = getUserValidation(email, password);

  if (!getUser) {
    return [400, { message: 'E-mail ou senha incorretos' }];
  }

  user = localStorage.setItem('userAuth', JSON.stringify(getUser));

  return [200, { getUser }];
});
