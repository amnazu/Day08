function randomRangNumber(minNumber, maxNumber) {
    
return Math.floor(Math.random()* (maxNumber - minNumber + 1 )) + minNumber;

}

module.exports = randomRangNumber;