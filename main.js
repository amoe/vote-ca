import _ from 'lodash';

// This is effectively used as a dictionary to determine the next state.
// [Rucker & Walker, 1997]
var nextStateMap = [
    false, false, false, false, false,
    true, true, true, true, true
]

function nextStep(grid) {
    var yRange = grid.length;
    var xRange = grid[0].length;    // FIXME: assert that grid is square

    var newGrid = _.cloneDeep(grid);

    // ES6 only
    for (let yIndex in _.range(yRange)) {
        for (let xIndex in _.range(xRange)) {
            newGrid[yIndex][xIndex] = nextState(grid, yIndex, xIndex);
        }
    }

    return newGrid;
}

function nextState(grid, yIndex, xIndex) {
    // FIXME: assert arguments

    // Identity CA
    return grid[yIndex][xIndex];
}



function meaningOfLife() {
    return 42;
}


module.exports = {
    meaningOfLife: meaningOfLife,
    nextStep: nextStep
};
