import mock from '../utils/mock';
import { getUserValidation } from '../services/registerUserService';

let user: any;
const userAuth: any = localStorage.getItem('userAuth');
const getUserAuth: any = JSON.parse(userAuth);

mock.onPost('/api/home/me').reply(200, {
  getUserAuth
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

const post = [
  {
    id: 1,
    image: 'https://mixdeseries.com.br/wp-content/uploads/2018/07/will-smith-4-e1534947669898.jpg',
    name: 'Ian Paulo',
    time: '20:00',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda? (Ian teste)',
    description: 'Descrição da pergunta feita por Ian Paulo. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 65,
    comment: 20,
    tags: [
      {
        id: 1,
        tag: '#Java',
        link: 'java'
      },
      {
        id: 2,
        tag: '#Python',
        link: 'python'
      },
      {
        id: 3,
        tag: '#Ruby',
        link: 'ruby'
      }
    ]
  },
  {
    id: 2,
    image: 'https://veja.abril.com.br/wp-content/uploads/2021/05/GettyImages-1297431032-1.jpg',
    name: 'Bill Gates',
    time: '20:00',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda? (Bill Gates teste)',
    description: 'Descrição da pergunta feita por Ian Paulo. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 64,
    comment: 20,
    tags: [
      {
        id: 1,
        tag: '#Microsoft',
        link: 'microsoft'
      }
    ]
  },
  {
    id: 3,
    image: 'https://sismf.museudofutebol.org.br/anexos/imagem/515923/w:640/h:640/c:0',
    name: 'Ronaldinho Gaúcho',
    time: '20:15',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda? (Ronaldinho teste)',
    description: 'Descrição da pergunta feita por Ronaldinho Gaúcho. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 51,
    comment: 10,
    tags: [
      {
        id: 1,
        tag: '#Futebol',
        link: 'futebol'
      },
      {
        id: 3,
        tag: '#Brasileiro',
        link: 'brasileiro'
      }
    ]
  },
  {
    id: 4,
    image: 'https://portalrapmais.com/wp-content/uploads/2020/12/neymar-jr-mexe-celular-meio-treino-instagram_376036_36.jpg',
    name: 'Neymar Jr',
    time: '12:00',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda? (Neymar teste)',
    description: 'Descrição da pergunta feita por Neymar Jr. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 50,
    comment: 30,
    tags: [
      {
        id: 1,
        tag: '#Futebol',
        link: 'futebol'
      },
      {
        id: 2,
        tag: '#Brasileiro',
        link: 'brasileiro'
      },
      {
        id: 3,
        tag: '#Menino ney',
        link: 'menino-ney'
      }
    ]
  },
  {
    id: 5,
    image: 'https://conteudo.imguol.com.br/c/noticias/e7/2021/02/27/cristiano-ronaldo-comemora-seu-gol-no-empate-por-1-a-1-da-juventus-com-o-hellas-verona-1614466167994_v2_1920x1280.jpg',
    name: 'Cristiano Ronaldo',
    time: '12:10',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda? (Cristiano teste)',
    description: 'Descrição da pergunta feita por Cristiano Ronaldo. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 50,
    comment: 30,
    tags: [
      {
        id: 1,
        tag: '#Futebol',
        link: 'futebol'
      },
      {
        id: 2,
        tag: '#CR7',
        link: 'cr7'
      }
    ]
  },
  {
    id: 6,
    image: 'https://www.gazetaesportiva.com/wp-content/uploads/imagem/2021/04/01/Messi.jpg',
    name: 'Messi',
    time: '12:15',
    question: 'Aqui vai ficar a pergunda. Aqui vai ficar a pergunda? (Messi teste)',
    description: 'Descrição da pergunta feita por Messi. Descrição da pergunta. Descrição da pergunta. Descrição da pergunta.',
    likes: 50,
    comment: 30,
    tags: [
      {
        id: 1,
        tag: '#Futebol',
        link: 'futebol'
      }, {
        id: 2,
        tag: '#Messi',
        link: 'messi'
      },
      {
        id: 3,
        tag: '#ET',
        link: 'et'
      }
    ]
  }
];

mock.onPost('/api/home/post').reply(200, {
  post
});

mock.onPost('/api/home/postdetail').reply(config => {
  const { id } = JSON.parse(config.data);

  const postFilter = post.filter(item => item.id === id);

  return [200, { postFilter }];
});
