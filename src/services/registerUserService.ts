import { User } from '../models/user';

export function getUser() {
  const users: any = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

export function cadastrar(user: User) {
  const users = getUser();
  // eslint-disable-next-line no-param-reassign
  user.id = new Date().getDate(); // timestamp - unico para o ID
  users.push(user); // adiciono mais um item no array
  localStorage.setItem('users', JSON.stringify(users));
}

export function getUserValidation(email: string, password: string) {
  const users: any = localStorage.getItem('users');
  const user: any = JSON.parse(users);
  return user !== undefined && user.length > 0
    ? user.find(item => item.email === email && item.password === password)
    : '';
}


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
