export const mutations = {
  SET_TOKEN(state, token) {
    state.accessToken = token;
  },
  SET_STATE(state, newState) {
    state.state = { ...state.state, ...newState };
  },
  SET_PROFILE(state, profile) {
    state.profile = profile;
  },
};

export const actions = {
  setToken({ commit }) {
    const accessToken = this.$cookies.get('accessToken') || '';
    this.$axios.defaults.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    commit('SET_TOKEN', accessToken);
  },
  setState({ commit }, state) {
    commit('SET_STATE', state);
  },
  setProfile({ commit }, profile) {
    if (!profile) {
      this.$cookies.remove('accessToken');
    }
    commit('SET_PROFILE', profile);
  },
  async fetchProfile({ dispatch }) {
    await this.$apis.auth.getMe().then((profile) => {
      dispatch('setProfile', profile);
    }).catch(() => {
      dispatch('setProfile', null);
    });
  },
};

export const state = () => ({
  profile: null,
  accessToken: '',
  state: {
    isSignInModalActive: false,
  },
});
