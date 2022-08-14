export default ({ store }) => {
  let carts = localStorage.getItem('hiskio-carts');

  if (carts) {
    carts = JSON.parse(carts);
  }

  if (!Array.isArray(carts)) {
    localStorage.removeItem('hiskio-carts');
    return;
  }

  carts.forEach((course) => {
    store.dispatch('payment/addCartItem', course);
  });
};
