const sumAll = function(numOne, numTwo) {
    let sum = 0;

    let sumFrom, sumTo;

    if ((typeof numOne) != 'number' || (typeof numTwo) != 'number') {
        return 'ERROR';
    }

    if ((numOne % 1) != 0 || (numTwo % 1) != 0) {
        return 'ERROR';
    }

    if (numOne < 0 || numTwo < 0) {
        return 'ERROR';
    }

    if (numOne < numTwo) {
        sumFrom = numOne;
        sumTo = numTwo;
    } else {
        sumFrom = numTwo;
        sumTo = numOne;
    }


    for (let i = sumFrom; i <= sumTo; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
