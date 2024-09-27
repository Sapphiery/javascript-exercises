const reverseString = function(inputString) {
    let splitString = inputString.split('');
    let reversedArray = splitString.reverse();
    let reversedString = reversedArray.join('');

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
