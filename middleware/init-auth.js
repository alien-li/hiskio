export default ({ app, store }) => {
  const accessToken = app.$cookies.get('accessToken');

  store.dispatch('auth/setToken', accessToken);

  if (!accessToken) {
    return true;
  }

  return store.dispatch('auth/fetchProfile');
};
