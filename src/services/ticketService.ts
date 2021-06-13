import { Ticket } from '../models/ticket';

import axios from '../utils/axios';

export function initialTickets() {
  const tickets = [
    {
      id: 1,
      startCity: 'São Paulo',
      endCity: 'Belo Horizonte',
      time: '19:00',
      seats: 30,
      price: '100,00'
    },
    {
      id: 2,
      startCity: 'Belo Horizonte',
      endCity: 'São Paulo',
      time: '06:00',
      seats: 30,
      price: '100,00'
    },
    {
      id: 3,
      startCity: 'Vinhedo',
      endCity: 'Campinas',
      time: '09:00',
      seats: 30,
      price: '20,00'
    },
    {
      id: 4,
      startCity: 'Valinhos',
      endCity: 'Jundiaí',
      time: '07:00',
      seats: 30,
      price: '25,00'
    },
    {
      id: 5,
      startCity: 'Jundiaí',
      endCity: 'Valinhos',
      time: '19:00',
      seats: 30,
      price: '25,00'
    }
  ];

  localStorage.setItem('tickets', JSON.stringify(tickets));
}

export function getTicket() {
  const tickets: any = localStorage.getItem('tickets');
  return tickets ? JSON.parse(tickets) : [];
}

export function getTicketsResult() {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/home/tikets')
      .then(response => {
        if (response.data.getTickets) {
          resolve(response.data.getTickets);
        } else {
          resolve(response.data.error);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getTicketById(id: number) {
  const tickets: Ticket[] = getTicket();
  return tickets.find(ticket => ticket.id === id);
}

// export function cadastrar(user: Ticket) {
//   const users = getTicket();
//   // eslint-disable-next-line no-param-reassign
//   user.id = new Date().getDate(); // timestamp - unico para o ID
//   users.push(user); // adiciono mais um item no array
//   localStorage.setItem('users', JSON.stringify(users));
// }

// export function getUserValidation(email: string, password: string) {
//   const users: any = localStorage.getItem("users");
//   const user: any = JSON.parse(users);
//   return user !== undefined && user.length > 0
//     ? user.find((item) => item.email === email && item.password === password)
//     : "";
// }

// atualizar(atividade: Atividade): void {
//   const atividades: Atividade[] = this.ListarTodas();
//   atividades.forEach((obj, index, objs) => {
//     if (atividade.id === obj.id) {
//       objs[index] = atividade;
//     }
//   });
//   localStorage.atividades = JSON.stringify(atividades);
// }

// remover(id: number): void {
//   let atividades: Atividade[] = this.ListarTodas();
//   atividades = atividades.filter(atividade => atividade.id !== id);
//   localStorage.atividades = JSON.stringify(atividades);
// }

// alterarStatus(id: number): void {
//   const atividades: Atividade[] = this.ListarTodas();
//   atividades.forEach((obj, index, objs) => {
//     if (id === obj.id) {
//       objs[index].concluida = !obj.concluida;
//     }
//   });
//   localStorage.atividades = JSON.stringify(atividades);
// }
