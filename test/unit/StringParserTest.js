var assert = require('assert');
var stringParserService = require('../../src/service/StringParserService');

describe('Validate v1 String Parser Service', function () {

    it('should return expected response', async function () {
        var { statusCode, data } = await stringParserService.v1Parser("JOHN0000MICHAEL0009994567");
        assert.equal(statusCode, 200, 'Status code incorrect');
        assert.equal(data.firstName, 'JOHN0000', 'First Name incorrect');
        assert.equal(data.lastName, 'MICHAEL000', 'Last Name incorrect');
        assert.equal(data.clientId, '9994567', 'Client id incorrect');
    });
});

describe('Validate v2 String Parser Service', function () {

    it('should return expected response', async function () {
        var { statusCode, data } = await stringParserService.v2Parser("JOHN0000MICHAEL0009994567");
        assert.equal(statusCode, 200, 'Status code incorrect');
        assert.equal(data.firstName, 'JOHN', 'First Name incorrect');
        assert.equal(data.lastName, 'MICHAEL', 'Last Name incorrect');
        assert.equal(data.clientId, '999-4567', 'Client id incorrect');
    });
});