const sumAll = function (num1, num2) {
    if (!(typeof (num1) == 'number') || num1 < 0) return 'ERROR';
    if (!(typeof (num2) == 'number') || num2 < 0) return 'ERROR';

    let smallerNum = Math.min(num1, num2);
    let largerNum = Math.max(num1, num2);
    let sum = 0;

    for (let i = smallerNum; i <= largerNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
