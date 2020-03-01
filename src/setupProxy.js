const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/TopRamen',
    createProxyMiddleware({
      target: 'http://starlord.hackerearth.com',
      changeOrigin: true,
    })
  );
};