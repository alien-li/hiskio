const title = 'HiSKIO 專業技能線上學習平台 | 來自全球高品質的職場專業課程';
const description = 'HiSKIO 為亞洲最多高品質「專業技能」教學課程的線上學習平台，提供數以千計包含電子書、線上課程、直播課程..等多元型態的知識商品。已經滿足超過 200,000 位職場上班族的學習需求。';
const image = 'https://hiskio.com/images/hiskio.jpg';

module.exports = {
  htmlAttrs: {
    lang: 'zh-TW',
  },
  title,
  meta: [{
    charset: 'utf-8',
  }, {
    hid: 'robots',
    name: 'robots',
    content: process.env.GCP_ENV !== 'production' ? 'noindex,nofollow' : 'index,follow',
  }, {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, maximum-scale=1',
  }, {
    hid: 'description',
    name: 'description',
    content: description,
  }, {
    name: 'author',
    content: 'HiSKIO',
  }, {
    hid: 'og:locale',
    property: 'og:locale',
    content: 'zh_TW',
  }, {
    hid: 'og:url',
    property: 'og:url',
    content: 'https://hiskio.com/',
  }, {
    property: 'og:type',
    content: 'website',
  }, {
    property: 'og:site_name',
    content: 'HiSKIO',
  }, {
    hid: 'og:title',
    property: 'og:title',
    content: title,
  }, {
    hid: 'og:description',
    property: 'og:description',
    content: description,
  }, {
    hid: 'og:image',
    property: 'og:image',
    content: image,
  }, {
    hid: 'og:image:type',
    property: 'og:image:type',
    content: 'image/jpg',
  }, {
    property: 'og:image:width',
    content: '1200',
  }, {
    property: 'og:image:height',
    content: '628',
  }, {
    name: 'twitter:card',
    content: 'summary_large_image',
  }, {
    name: 'twitter:site',
    content: '@HiSKIO',
  }, {
    name: 'twitter:creator',
    content: '@HiSKIO',
  }, {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: title,
  }, {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: description,
  }, {
    hid: 'twitter:text:summary_photo_image_alt_text',
    name: 'twitter:text:summary_photo_image_alt_text',
    content: description,
  }, {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: image,
  }, {
    name: 'apple-mobile-web-app-title',
    content: 'HiSKIO',
  }],
  link: [{
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: 'https://hiskio.com/favicon.png',
  }, {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com/',
    crossorigin: '',
  }, {
    rel: 'dns-prefetch',
    href: 'https://fonts.gstatic.com/',
  }],
};
