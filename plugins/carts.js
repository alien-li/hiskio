export default ({ store }, inject) => {
  inject('toggleCartItem', (course) => {
    const { payment } = store.state;

    const isInCarts = payment.carts
      .some(({ id }) => id === course.id);

    if (isInCarts) {
      store.dispatch('payment/removeCartItem', course);
    } else {
      store.dispatch('payment/addCartItem', course);
    }

    if (!process.client) {
      return;
    }

    localStorage.setItem(
      'hiskio-carts',
      JSON.stringify(payment.carts),
    );
  });
};
