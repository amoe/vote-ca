// The identity CA

// This is effectively used as a dictionary to determine the next state.
// [Rucker & Walker, 1997]
var nextState = [
    false, false, false, false, false,
    true, true, true, true, true
]

function nextStep(grid) {
    return grid;
}

function meaningOfLife() {
    return 42;
}


module.exports = {
    meaningOfLife: meaningOfLife,
    nextStep: nextStep
};
