// test.js

var assert = require('chai').assert;

var something = require('./main.js');

it('should be correct', function () {
    assert.equal(42, something.meaningOfLife());
});



