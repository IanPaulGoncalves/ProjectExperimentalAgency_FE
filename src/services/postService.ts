import axios from '../utils/axios';

// eslint-disable-next-line import/prefer-default-export
export function getPostsService() {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/home/post')
      .then(response => {
        if (response.data.post) {
          resolve(response.data.post);
        } else {
          resolve(response.data.error);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getPostsDetailService(id: number) {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/home/postdetail', { id })
      .then(response => {
        if (response.data.postFilter) {
          resolve(response.data.postFilter);
        } else {
          resolve(response.data.postFilter);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
