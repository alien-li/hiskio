export default ({ app }) => ({
  getFundraisingCourses: () => app.$axios({
    method: 'GET',
    url: '/v2/courses/fundraising',
  }).then((res) => res.data),
});
