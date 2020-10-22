const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'https://appandme2020-api.herokuapp.com/',
          changeOrigin: true
      })
  )
};