import apis from '@/apis';

export default (context, inject) => {
  const libraries = {};

  Object.keys(apis).forEach((key) => {
    libraries[key] = apis[key](context);
  });

  inject('apis', libraries);
};
