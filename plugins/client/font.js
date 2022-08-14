import WebFont from 'webfontloader';

export default () => {
  WebFont.load({
    google: {
      families: ['Noto Sans TC:300,400,500,700,900&display=swap'],
    },
  });
};
