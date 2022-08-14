export const mutations = {
  ADD_CART_ITEM(state, course) {
    const { carts } = state;
    const index = carts.findIndex(({ id }) => id === course.id);

    if (index > 0) {
      state.carts[index] = course;
    } else {
      state.carts.push(course);
    }
  },
  REMOVE_CART_ITEM(state, course) {
    state.carts = state.carts
      .filter(({ id }) => id !== course.id);
  },
};

export const actions = {
  addCartItem({ commit }, course) {
    commit('ADD_CART_ITEM', course);
  },
  removeCartItem({ commit }, course) {
    commit('REMOVE_CART_ITEM', course);
  },
};

export const state = () => ({
  carts: [],
});
