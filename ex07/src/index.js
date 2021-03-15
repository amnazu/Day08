var sum = 0

function addThree() {
    sum = sum + 3
    return undefined
}

function addFive() {
    sum = sum + 5
    return undefined 
}

addThree();
addFive();


module.exports = {
    addThree,
    addFive
};