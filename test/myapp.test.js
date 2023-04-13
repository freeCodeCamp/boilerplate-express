let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../myApp');

chai.use(chaiHttp);
let should = chai.should();


  it('should return JSON on GET /json', (done) => {
    chai.request(app)
      .get('/json')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('HELLO JSON');
        done();
      });
  });

  it('should return uppercase JSON on GET /json when MESSAGE_STYLE is uppercase', (done) => {
    process.env.MESSAGE_STYLE = 'uppercase'
    chai.request(app)
      .get('/json')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('HELLO JSON');
        done();
      });
  });

  // Add more tests...
