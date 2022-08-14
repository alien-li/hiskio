export default ({ app }) => ({
  signIn: (data) => app.$axios({
    method: 'POST',
    url: '/v2/auth/login',
    data,
  }).then((res) => res.data),

  getMe: (data) => app.$axios({
    method: 'GET',
    url: '/v2/me',
    data,
  }).then((res) => res.data),
});
