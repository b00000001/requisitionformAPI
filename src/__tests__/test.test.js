const app = require('../../dist/src/server.js').default;
const request = require('supertest');

describe("Test the root path", () => {
    test('GET /', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });
    })
    test('Return content should be JSON', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
            if (err) return done(err);
            done();
        }
    )})
  });