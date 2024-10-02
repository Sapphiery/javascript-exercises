const removeFromArray = function(targetArray, ...toRemove) {
    // const newArray = [];

    // for (const num of targetArray) {
    //     const needsRemoval = toRemove.find((element) => element === num);

    //     if (!needsRemoval && needsRemoval != 0) {
    //         newArray.push(num);
    //     }
    // }

    // return newArray;

    for (let i = 0; i < toRemove.length; i++) {
        let index = targetArray.indexOf(toRemove[i]);

        while (index >= 0) {
            targetArray.splice(index, 1);
            index = targetArray.indexOf(toRemove[i]);
        }
    }

    return targetArray;
};

// Do not edit below this line
module.exports = removeFromArray;
