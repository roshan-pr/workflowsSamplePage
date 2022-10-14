const express = require('express');

const createApp = () => {
  const app = express();
  app.set('view engine', 'pug');

  app.use(express.json());
  app.get('/', (req, res, next) => {
    res.render('homePage', {});
  });

  app.use(express.static('public'));

  return app;
};

module.exports = { createApp };
