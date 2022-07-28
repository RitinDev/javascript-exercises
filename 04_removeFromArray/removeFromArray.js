const removeFromArray = function (array, ...toBeRemoved) {
    let toBeRemovedIndex = 0;
    while (toBeRemovedIndex < toBeRemoved.length) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === toBeRemoved[toBeRemovedIndex]) array.splice(i, 1);
        }
        toBeRemovedIndex++;
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
