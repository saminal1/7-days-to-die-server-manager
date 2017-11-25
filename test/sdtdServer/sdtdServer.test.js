var supertest = require('supertest');
var assert = require('assert');
var agent = supertest(sails.hooks.http.app);

describe('GET onlineplayers', function() {
    it('should return JSON', function(done) {
        agent
            .get('/api/sdtdserver/onlineplayers')
            .query({ serverId: '1' })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('should error when no serverId given', function(done) {
        agent
            .get('/api/sdtdserver/onlineplayers')
            .expect(400, done);
    });
});