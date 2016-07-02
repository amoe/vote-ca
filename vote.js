import _ from 'lodash';

// This is effectively used as a dictionary to determine the next state.
// [Rucker & Walker, 1997]
var nextStateMap = [
    false, false, false, false, false,
    true, true, true, true, true
];

function flipCoin() {
    return Math.random() < 0.5 ? false : true;
}

function randomGrid(ySize, xSize) {
    var yIndex, xIndex;

    var newGrid = [];
    for (yIndex of _.range(ySize)) {
        var thisRow = [];
        
        for (xIndex of _.range(xSize)) {
            thisRow.push(flipCoin());
        }

        newGrid.push(thisRow);
    }

    return newGrid;
}

function nextStep(grid) {
    var yRange = grid.length;
    var xRange = grid[0].length;    // FIXME: assert that grid is square

    var newGrid = _.cloneDeep(grid);

    // ES6 only
    var yIndex, xIndex;
    for (yIndex of _.range(yRange)) {
        for (xIndex of _.range(xRange)) {
            newGrid[yIndex][xIndex] = nextState(grid, yIndex, xIndex);
        }
    }

    return newGrid;
}

function nextState(grid, yIndex, xIndex) {
    // FIXME: assert arguments

    // Calculate the sum of neighbours
    var possibleOffsets = [
        [-1, -1], [-1, 0], [-1, +1],
        [0, -1],  [0, 0],  [0, +1],
        [+1, -1], [+1, 0], [+1, +1]
    ];

    var yLimit = grid.length - 1;
    var xLimit = grid[0].length - 1;

    var nineSum = 0;
    var offset;
    for (offset of possibleOffsets) {
        var [yOffset, xOffset] = offset;
        var neighbourY = yIndex + yOffset;
        var neighbourX = xIndex + xOffset;

        if (neighbourX < 0 || neighbourX > xLimit)
            continue;
        if (neighbourY < 0 || neighbourY > yLimit)
            continue;

        var neighbourValue = grid[neighbourY][neighbourX];
        
         if (neighbourValue === true) {
            nineSum += 1;
        } else if (neighbourValue === false) {
            nineSum += 0;       // Don't touch the value.
        } else {
            throw Error(
                "unexpected value found in neighbour: " + neighbourValue
            );
        }
    }

    // FIXME: Assert that the nineSum is now a reasonable value.

    // Get the next state value from the majority vote.
    var newValue = nextStateMap[nineSum];

    return newValue;
}

function meaningOfLife() {
    return 42;
}


module.exports = {
    meaningOfLife: meaningOfLife,
    nextStep: nextStep,
    randomGrid: randomGrid
};
