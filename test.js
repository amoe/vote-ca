// test.js

var assert = require('chai').assert;

var something = require('./main.js');

it('next step is correct', function () {
    var grid = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    var expectedGrid = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];


    var nextGrid = something.nextStep(grid);
    assert.deepEqual(expectedGrid, nextGrid);
});

it('should be correct', function () {
    assert.equal(42, something.meaningOfLife());
});



