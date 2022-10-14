const request = require('supertest');
const { createApp } = require('../src/app.js');

describe('GET /', () => {
  it('Should serve the home page', (done) => {
    request(createApp())
      .get('/')
      .expect(/GREETINGS/)
      .expect(200, done);
  });
});
