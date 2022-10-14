const { createApp } = require('./src/app.js');

const main = () => {
  const app = createApp();

  app.listen(8080, () => console.log('server listening on port: 8080'));
};

main();
