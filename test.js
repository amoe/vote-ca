// test.js

var assert = require('chai').assert;

var something = require('./main.js');

it('uniform grid stays uniform', function () {
    var grid = [
        [false, false, false],
        [false, false,  false],
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

it('surrounded true will flip', function () {
    var grid = [
        [false, false, false],
        [false, true,  false],
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



