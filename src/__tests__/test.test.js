const app = require('../../dist/src/server.js').default;
const request = require('supertest');
const dotenv = require('dotenv');
dotenv.config();

describe('Test the root path', () => {
  test('GET /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  test('Return content should be JSON', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  describe('Test the /update route', () => {
    test('Post route should return JSON', (done) => {
      request(app)
        .post('/update')
        .expect(200)
        .set('Authorization', `QB-USER-TOKEN ${process.env.QB_USER_TOKEN}`)
        .set('QB-REALM-HOSTNAME', 'piedmontplumbers.quickbase.com')
        .send({
          to: 'br4vj56h7',
          data: [
            {
              6: {
                value: 'Jest'
              },
              7: {
                value: 'Test Phase'
              },
              8: {
                value: 'Test Category'
              },
              9: {
                value: 'Test Subcategory'
              },
              10: {
                value: 'Test Item'
              },
              11: {
                value: 'Test Qty'
              },
              12: {
                value: 'Additional Item'
              }
            }
          ],
          fieldsToReturn: [6, 7, 8, 9, 10, 11, 12]
        })
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});
