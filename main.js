// The identity CA

// This is effectively used as a dictionary to determine the next state.
// [Rucker & Walker, 1997]
var nextState = [
    false, false, false, false, false,
    true, true, true, true, true
]

function nextStep(grid) {
    yRange = grid.length;
    xRange = grid[0].length;    // FIXME: assert that grid is square

    // ES6 only
    /*
    for (let xIndex of _.range(yRange)) {
        console.log("What?");
    }
    */

    return grid;
}



function meaningOfLife() {
    return 42;
}


module.exports = {
    meaningOfLife: meaningOfLife,
    nextStep: nextStep
};
