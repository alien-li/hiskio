import isHTTPS from 'is-https';

export default (req, res, next) => {
  const isHttps = isHTTPS(req);
  if (process.env.NODE_ENV === 'production' && isHttps === false) {
    res.writeHead(301, {
      Location: `https://${req.headers.host}${req.url}`,
    });
    res.end();
  }
  next();
};
