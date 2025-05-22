const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

suite('Functional Tests', () => {
  suite('GET /api/convert', () => {
    test('Convert gal to L', (done) => {
      chai.request(server)
        .get('/api/convert')
        .query({ input: '1gal' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.initNum).to.equal(1);
          expect(res.body.initUnit).to.equal('gal');
          expect(res.body.returnNum).to.equal(3.78541);
          expect(res.body.returnUnit).to.equal('L');
          done();
        });
    });

    test('Convert L to gal', (done) => {
      chai.request(server)
        .get('/api/convert')
        .query({ input: '1L' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.initNum).to.equal(1);
          expect(res.body.initUnit).to.equal('L');
          expect(res.body.returnNum).to.equal(0.264172);
          expect(res.body.returnUnit).to.equal('gal');
          done();
        });
    });

    // ... add more tests for other conversions ...
  });
});