const repeatString = function(string, reps) {
    let repeated = '';

    if (reps < 0)
        return 'ERROR';

    for (let i = 0; i < reps; i++) {
        repeated += string;
    }

    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
