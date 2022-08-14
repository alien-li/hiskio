import auth from './auth.json';
import common from './common.json';
import payment from './payment.json';

export default () => new Promise(((resolve) => {
  resolve({
    auth,
    common,
    payment,
  });
}));
