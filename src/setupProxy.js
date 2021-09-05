const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/.netlify',
    createProxyMiddleware({
      target: 'https://elegant-banach-d9159b.netlify.app',
      changeOrigin: true,
    })
  );
};