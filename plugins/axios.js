import axios from 'axios';

export default ({ store }, inject) => {
  const { accessToken } = store.state.auth;

  const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  });

  inject('axios', instance);
};
